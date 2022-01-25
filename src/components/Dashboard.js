import React from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import HertzMap from "./HertzMap";
import CarCard from "./CarCard";
import CollapsableCard from "./CollapseCard";

const Dashboard = () => {
  return (
    <div className="card-container">
      <div>
        <h1 style={{marginTop:"15px", marginBottom:"25px"}}>Car Locations</h1>
      <Card className="map-card">
        <HertzMap/>
      </Card>
      </div>
      <Card className="fleet-card" interactive={true} elevation={Elevation.TWO}>
        <h1 className="fleet-title-styling">Your Fleet 
        <Button>Get Fleet</Button></h1>
        <CarCard />
      </Card>
      {/* <CollapsableCard /> NOT CURRENTLY A WORKING COMPONENT*/}
    </div>
  );
};

export default Dashboard;
