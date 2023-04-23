import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./MapComponent.css";

const MapComponent = (props) => {
  console.log(props);
  return (
    props &&
    props.latitude &&
    props.longitude && (
      <MapContainer
        className="map-container"
        center={[props.latitude, props.longitude]}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={[props.latitude, props.longitude]} />
      </MapContainer>
    )
  );
};

export default MapComponent;
