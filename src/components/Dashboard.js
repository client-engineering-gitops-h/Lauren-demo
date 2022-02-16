import React, { useState } from "react";
import { Card, Elevation } from "@blueprintjs/core";
import HertzMap from "./HertzMap";
import CarCard from "./CarCard";

const Dashboard = () => {
  const [mapCenter, setMapCenter] = useState({});
  const [selectedCarMarkers, setSelectedCarMarkers] = useState();

  return (
    <div className="card-container">
      <div>
        <h1 style={{ marginTop: "15px", marginBottom: "25px" }}>
          Car Locations
        </h1>
        <Card className="map-card">
          <HertzMap
            mapCenter={mapCenter}
            selectedCarMarkers={selectedCarMarkers}
          />
        </Card>
      </div>
      <Card className="fleet-card" interactive={true} elevation={Elevation.TWO}>
        <CarCard
          setMapCenter={setMapCenter}
          setSelectedCarMarkers={setSelectedCarMarkers}
        />
      </Card>
    </div>
  );
};

export default Dashboard;
