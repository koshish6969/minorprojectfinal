import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './MapComponent.css';
import { Icon } from "leaflet";

const MapComponent = (props) => {
  return (
    props && props.lat && 
    <MapContainer className="map-container" center={[props.lat, props.lon]} zoom={12} scrollWheelZoom={false}>
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

        <Marker
          position={[
            props.lat,
            props.lon
          ]}
          icon={Icon}
        />
    </MapContainer>

  );
}

export default MapComponent;