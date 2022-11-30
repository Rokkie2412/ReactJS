import React, { useRef, useState } from "react";
import { LoadScript } from "@react-google-maps/api";

import "./App.css";
import Input from "./components/Input";
import GoogleMaps from "./components/GoogleMaps";
import TimeAndDistance from "./components/TimeAndDistance";

const App = () => {
  const [renderRoute, setRenderRoute] = useState(null);
  const [distance, setDistance] = useState(null);
  const [time, setTime] = useState(null);
  const originLoc = useRef();
  const DestLoc1 = useRef();
  const DestLoc2 = useRef();

  const calculateRoute = async () => {
    if (originLoc.current.value === "" || DestLoc1.current.value === "") {
      return;
    } //eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionsService();
    const result = await directionService.route({
      origin: originLoc.current.value,
      destination: DestLoc1.current.value,
      //eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setRenderRoute(result);
    setDistance(result.routes[0].legs[0].distance.text);
    setTime(result.routes[0].legs[0].duration.text);
  };

  return (
    <LoadScript
      googleMapsApiKey={"AIzaSyBuDXGh0iay6VVMlb3X7Odap7W3mS8ZZiE"}
      libraries={["places"]}
    >
      <div className="main-container">
        <div className="left">
          <h2>Navigation</h2>
          <Input reference={originLoc} placeholder="Origins Location" />
          <Input reference={DestLoc1} placeholder="Destination Location" />
          <Input reference={DestLoc1} placeholder="Destination Location" />
          <TimeAndDistance time={time} dist={distance} />
          <button className="buttonCalc" onClick={() => calculateRoute()}>
            Calculate
          </button>
        </div>
        <div className="right">
          <GoogleMaps render={renderRoute} setRender={setRenderRoute} />
        </div>
      </div>
    </LoadScript>
  );
};

export default App;
