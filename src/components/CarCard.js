import React, { useState, useEffect } from "react";
import { Card, Elevation, Collapse, Button, Icon } from "@blueprintjs/core";
import axios from "axios";
import CollapseContent from "./CollapseContent";
const API_KEY = process.env.REACT_APP_API_KEY;


const CarCard = ({ setSelectedCar, setCarCoordinates }) => {
  const [cars, setCars] = useState({
      "1G1FZ6S02M4108532": {
        imei: "12310293819",
        make: null,
        model: null,
      },
  

      "1G1FZ6S09M4108222": {
        imei: "12310293819",
        make: null,
        model: null
},  
  

      "WBXPA93415WD09324": {
      imei: "12310",
      make: null, 
      model: null },
      

      "1J8HH48P17C686412" : {
      imei: "12131",
      make: null,
      model: null
},
  
  });
const [mileage, setMileage] = useState({
  //     '1G1FZ6S02M4108532':{
  //     "1G1FZ6S02M4108532": {
  //       epm: "12310293819",
  //       latitude: 26.402623,
  //       longitude: -81.80928
  // }},
  
  // '1G1FZ6S09M4108222':{
  //     "1G1FZ6S04L4109518": {
  //       epm: "12310293819",
  //       latitude: 26.402256,
  //       longitude: -81.8123198
  // }},  
  
  // 'WBXPA93415WD09324': {
  // "WBXPA93415WD09324": {
  // epm: "12310293819",
  //       latitude: 26.41103,
  //       longitude: -81.812311
  // }},
  
  // '1J8HH48P17C686412': {
  // "1J8HH48P17C686412": {
  //   epm: "12310293819",
  //     latitude: 26.41126,
  //     longitude: -81.8081235
  // }},
  
 });
  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const intervalCount = setInterval(() => {
  //     setCounter(counter + 1);
  //   }, 1500);
  //   return () => {
  //     clearInterval(intervalCount);
  //   };
  // });

  // useEffect(() => {
  //   console.log("api key here", API_KEY);
  //   axios
  //     .get(`https://pds-us.rentalmatics.com/TRIALS/vehicles/IBM_1`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "X-Authorization": API_KEY,
  //       },
  //     })
  //     .then(({ data }) => {
  //       const id = data.vid;
  //       setCars({ ...cars, [id]: { ...data } });
  //     })
  //     .then(
  //       axios
  //         .get(
  //           `https://pds-us.rentalmatics.com/TRIALS/rentalsystem/vehicles/IBM_1/mileage-and-location`,
  //           {
  //             headers: {
  //               "Content-Type": "application/json",
  //               "X-Authorization": API_KEY,
  //             },
  //           }
  //         )
  //         .then(({ data }) => {
  //           const id = data.vid;
  //           setMileage({ ...mileage, [id]: { ...data } });
  //         })
  //     );
  // }, [counter]);

  useEffect(() => {
    for (const key in cars) {
      if (!(cars[key].make || cars[key].model || cars[key].year)) {
        axios
          .get(
            `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${key}?format=json`
          )
          .then(({ data }) => {
            const make = data.Results[6].Value;
            const model = data.Results[8].Value;
            const year = data.Results[9].Value;
            console.log("data from api", data, "make", make, "year", year);
            const updatedMakeModel = { make: make, model: model, year: year };
            setCars({ ...cars, [key]: { ...cars[key], ...updatedMakeModel } });
          });
      }
    }
  }, []);


  useEffect(() => {
    setCarCoordinates(mileage);
  }, [mileage]);

  return (
    <div>
      {cars &&
        mileage &&
        Object.keys(cars).map((key, i) => {
          const car = cars[key];
          const carMileage = mileage[key];
          return (
            <Card
              key={i}
              className="car-card"
              interactive={true}
              elevation={Elevation.One}
            >
            <CollapseContent  setSelectedCar={setSelectedCar} car={car} carMileage={carMileage}/>
            </Card>
          );
        })}
    </div>
  );
};

export default CarCard;
