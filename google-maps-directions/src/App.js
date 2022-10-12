import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import {
  useJsApiLoader, //manggil API Fetching
  GoogleMap, //manggil Map
  Marker, //set marker sesuai long dan lang
  Autocomplete, //untuk search autocomplete
  DirectionsRenderer, //untuk nunjukin jalan
} from "@react-google-maps/api";
import * as React from "react";
const libari = ["places"];

//------------------------------------------------------------------------------

function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: libari,
  });

  const [map, setMap] = React.useState(/** @type google.maps.Map*/ (null));
  const [directionResponse, setDirectionResponse] = React.useState(null);
  const [distance, setDistance] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [Center, setCenter] = React.useState(null);

  // const Center = { lat: latitude, lng: longtitude };
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = React.useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = React.useRef();

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            console.log(result.state);
            navigator.geolocation.getCurrentPosition((pos) => {
              console.log(Number(pos.coords.latitude));
              setCenter({
                lat: parseFloat(pos.coords.latitude),
                lng: parseFloat(pos.coords.longitude),
              });
            });
          } else if (result.state === "prompt") {
            console.log(result.state);
            navigator.geolocation.getCurrentPosition((pos) => {
              setCenter({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude,
              });
            });
          } else {
            // console.log(result.state);
          }
        });
    }
  }, []);

  if (!isLoaded) {
    return <SkeletonText />;
  }

  const calculateRoute = async () => {
    //fungsi untuk ngukur jarak waktu dan nyari rute
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    //eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionsService();
    const result = await directionService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      //eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionResponse(result);
    setDistance(result.routes[0].legs[0].distance.text);
    setDuration(result.routes[0].legs[0].duration.text);
  };

  const clearRouter = () => {
    setDirectionResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  };

  return (
    <Flex
      position="relative"
      flexDirection="column"
      alignItems="center"
      bgColor="blue.200"
      h="100vh"
      w="100vw"
    >
      <Box position="absolute" left={0} top={0} h="100%" w="100%">
        {/* google map box */}
        <GoogleMap
          center={Center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            streetViewControl: false,
          }}
          onLoad={(map) => setMap(map)}
        >
          {/* Display Marker or flexDirection */}
          <Marker position={Center} />
          {directionResponse && (
            <DirectionsRenderer directions={directionResponse} />
          )}
        </GoogleMap>
      </Box>

      <Box
        p={4}
        borderRadius="lg"
        mt={4}
        bgColor="white"
        shadow="base"
        minW="container.md"
        zIndex="modal"
      >
        <HStack spacing={4}>
          <Autocomplete>
            <Input type="text" placeholder="Origin" ref={originRef} />
          </Autocomplete>
          <Autocomplete>
            <Input type="text" placeholder="Destination" ref={destinationRef} />
          </Autocomplete>

          <ButtonGroup>
            <Button onClick={calculateRoute} colorScheme="pink" type="submit">
              Calculate Route
            </Button>
            <IconButton
              aria-label="center back"
              icon={<FaTimes />}
              onClick={clearRouter}
            />
          </ButtonGroup>
        </HStack>
        <HStack spacing={4} mt={4} justifyContent="space-between">
          <Text>Distance: {distance} </Text>
          <Text>Duration: {duration} </Text>
          <IconButton
            aria-label="center back"
            icon={<FaLocationArrow />}
            isRound
            onClick={() => map.panTo(Center)} //panto untuk langsung ke tempat sesuai lang dan long
          />
        </HStack>
      </Box>
    </Flex>
  );
}

export default App;
