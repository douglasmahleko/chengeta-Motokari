import  React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/home"
// import NavBar from "./components/navBar/navBar"
import AddCar from "./components/cars/addCar"
import AddCarAndAccounts from "./components/CarAndAccounts/addCarAndAccounts"
import AddDriverAndAccountant from "./components/DriverAndAccountant/addDriverAndAccountant"
import AddUser from "./components/users/addUser"
import ShowCars from "./components/cars/showCars"
import ShowUsers from "./components/users/showUsers"
import AddEmpsAndCars from "./components/empsAndCars/addEmpsAndCar"
import AddDriverAndHR from "./components/DriverAndHR/addDriversAndHR"
import AddCarAndDriver from "./components/CarAndDriver/addcarAndDriver"
import ShowCarsAndAccountas from "./components/CarAndAccounts/showCarsAndAccountas"
import ShowDriverAndAccounts from "./components/DriverAndAccountant/showDriverAndAccounts"
import ShowEmpsAndCar from "./components/empsAndCars/showEmpsAndCar"
import ShowCarAndDriver from "./components/CarAndDriver/showCarAndDriver"
import ShowDriverAndHR from "./components/DriverAndHR/showDriverAndHR"
import { Actor, HttpAgent } from "@dfinity/agent";
import { canisterId, idlFactory } from "./declarations/vehicleManagement";

import Box from '@mui/material/Box';
import NavBar from './components/navBar/navaBar';
import SideBar from './components/navBar/sideBar';
import Grid from '@mui/material/Grid';
import { useLocation } from 'react-router-dom';
// import { canisterId, idlFactory } from "./declarations/datasource";

const env = process.env.DFX_NETWORK || "local";
const localhost = "http://localhost:4943";
const livehost = "https://icp0.io";


const App = ({children, backendActor}) => {

  // let agent = new HttpAgent({
  //   host: env === "local" ? localhost : livehost,
  // });

  // if(env == "local"){
  //   agent.fetchRootKey();
  // }
  // console.log("canister Id " +canisterId)
  // const backendActor = Actor.createActor(idlFactory, {
  //   agent,
  //   canisterId: canisterId,
  // });

  return(
    <Grid container>
      <Box item >
        <NavBar backendActor={backendActor} />
        <SideBar backendActor={backendActor} />
      </Box>
      <Box sx={{marginLeft:"20%"}}>
        <div >
          {children}
        </div>
      </Box>
    </Grid>
  )
};

export default App;
