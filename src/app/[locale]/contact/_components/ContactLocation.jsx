"use client";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const CustomMap = () => {
  const [markerLocation, setMarkerLocation] = useState({
    lat: 30.006715353230216,
    lng: 30.97424822401751,
  });

  // Custom marker icon
  const customIcon = L.icon({
    iconUrl: "/assets/marker.png",
    iconSize: [40, 40],
    iconAnchor: [20, 40], // Point of the icon which corresponds to marker's location
    popupAnchor: [0, -40], // Point from which the popup should open relative to the iconAnchor
    errorTileUrl:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", // Fallback for missing icon
  });

  return (
    <div className="map-container rounded-lg w-full h-[300px] overflow-hidden">
      <MapContainer
        center={[markerLocation.lat, markerLocation.lng]}
        zoom={15}
        style={{ width: "100%", height: "100%", borderRadius: "20px" }}
        scrollWheelZoom={true}
        zoomControl={true}
        attributionControl={false}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.esri.com/">Esri</a> &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
        />
        <Marker
          position={[markerLocation.lat, markerLocation.lng]}
          icon={customIcon}
        >
          <Popup>
            <div className="text-center">
              <h3 className="font-semibold text-gray-800">Rosewood</h3>
              <p className="text-sm text-gray-600">Your location here</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default CustomMap;
