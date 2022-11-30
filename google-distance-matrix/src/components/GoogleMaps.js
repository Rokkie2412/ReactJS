import React from "react";
import { GoogleMap, MarkerF, DirectionsRenderer } from "@react-google-maps/api";

const GoogleMaps = ({ render, setRender }) => {
  const Center = { lat: -6.905977, lng: 107.613144 };
  const Center2 = { lat: -6.597629, lng: 106.799568 };
  return (
    <GoogleMap
      center={Center}
      zoom={15}
      mapContainerStyle={{ width: "100%", height: "100%" }}
      options={{
        streetViewControl: false,
      }}
    >
      <MarkerF position={Center} />
      <MarkerF position={Center2} />
      {render && <DirectionsRenderer directions={render} />}
    </GoogleMap>
  );
};

export default GoogleMaps;
