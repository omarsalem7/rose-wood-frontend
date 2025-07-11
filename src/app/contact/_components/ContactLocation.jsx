"use client";
import React, { useState } from "react";
import { Map, Marker } from "@vis.gl/react-google-maps";

const CustomMap = () => {
  const [markerLocation, setMarkerLocation] = useState({
    lat: 24.7136,
    lng: 46.6753,
  });

  return (
    <div className="map-container rounded-lg w-full h-[450px]">
      <Map
        style={{ width: "100%", height: "100%", borderRadius: "20px" }}
        defaultZoom={15}
        defaultCenter={markerLocation}
        gestureHandling="greedy"
        disableDefaultUI
      >
        <Marker
          position={markerLocation}
          icon={{
            url: "/assets/marker.png",
            scaledSize: { width: 40, height: 40 },
          }}
        />
      </Map>
    </div>
  );
};

export default CustomMap;
