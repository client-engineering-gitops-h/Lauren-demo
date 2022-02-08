import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../styles/DigitalMesh.css";
import carIcon from "../map/car.png"
import { Icon } from "@blueprintjs/core";

// we can pass car locations through here for markers
const hertz = [26.4194, -81.81055];

// test diff
function HertzMap({ carCoordinates, selectedCar }) {
  return (
    <MapContainer center={hertz} zoom={14}>
      <TileLayer
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=09kOwvflRhlbJpyDLsaQ"
      />
      {carCoordinates &&
        Object.keys(carCoordinates).map((key, i) => {
          const carLocation = carCoordinates[key];
          const carLatLong = [carLocation.latitude, carLocation.longitude];
          return (
            <Marker key={i} position={carLatLong} >
              <Popup>{carLocation.vid}</Popup>
            </Marker>
          );
        })}

      <Marker position={hertz}>
        <Popup>Hertz Global Headquarters</Popup>
      </Marker>
    </MapContainer>
  );
}

export default HertzMap;
