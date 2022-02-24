import React, { useState } from "react";
import { Card, Elevation } from "@blueprintjs/core";
import HertzMap from "./HertzMap";
import CarCard from "./CarCard";

const Dashboard = ({currPosition, setCurrPosition}) => {
  const [selectedCarMarkers, setSelectedCarMarkers] = useState();
  // move in currPosition here

  return (
    <div className="card-container">
      <div>
        <h1 style={{ marginTop: "15px", marginBottom: "25px" }}>
          Car Locations
        </h1>
        <Card className="map-card">
          {/* pass in currPosition */}
          <HertzMap 
             selectedCarMarkers={selectedCarMarkers} 
             currPosition={currPosition}
             setCurrPosition={setCurrPosition}
                 />
        </Card>
      </div>
      <Card className="fleet-card" interactive={true} elevation={Elevation.TWO}>
        {/* pass in currPosition */}
        <CarCard 
         setSelectedCarMarkers={setSelectedCarMarkers}
         currPosition={currPosition}
         setCurrPosition={setCurrPosition}
         />
      </Card>
    </div>
  );
};

export default Dashboard;
