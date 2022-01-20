import React from "react";
import "./styles/DigitalMesh.css";
import Dashboard from "./components/Dashboard";
import Topbar from "./components/Topbar";
import HertzMap from "./components/HertzMap";

function App() {
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("X-Authorization", "36ea5142-a287-46f2-bdb3-d79d159f52b3");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("https://pds-us.rentalmatics.com/TRIALS/vehicles/IBM_1", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("Rentalmatics", error));

  return (
    <div className="DigitalMesh">
      <Topbar />
      <Dashboard />
      <div className="map-container">
        <HertzMap />
      </div>
    </div>
  );
}

export default App;
