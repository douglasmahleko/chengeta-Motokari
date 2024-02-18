import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/main.css";
import App from "./App";

import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/navaBar';
import SideBar from './components/navBar/sideBar';
import ShowCarsAndAccountas from './components/CarAndAccounts/showCarsAndAccountas';
import AddCarAndAccounts from './components/CarAndAccounts/addCarAndAccounts';
import ShowCars from './components/cars/showCars';
import AddCar from './components/cars/addCar';
import ShowDriverAndAccounts from "./components/DriverAndAccountant/showDriverAndAccounts"
import ShowEmpsAndCar from "./components/empsAndCars/showEmpsAndCar"
import ShowCarAndDriver from "./components/CarAndDriver/showCarAndDriver"
import ShowDriverAndHR from "./components/DriverAndHR/showDriverAndHR"
import ShowUsers from "./components/users/showUsers"
import AddEmpsAndCars from "./components/empsAndCars/addEmpsAndCar"
import AddDriverAndHR from "./components/DriverAndHR/addDriversAndHR"
import AddCarAndDriver from "./components/CarAndDriver/addcarAndDriver"
import AddDriverAndAccountant from "./components/DriverAndAccountant/addDriverAndAccountant"
import AddUser from "./components/users/addUser"

import { Actor, HttpAgent } from "@dfinity/agent";
import { canisterId, idlFactory } from "./declarations/vehicleManagement";

const env = process.env.DFX_NETWORK || "local";
const localhost = "http://localhost:4943";
const livehost = "https://icp0.io";

let agent = new HttpAgent({
  host: env === "local" ? localhost : livehost,
});

if(env == "local"){
  agent.fetchRootKey();
}
console.log("canister Id " +canisterId)
const backendActor = Actor.createActor(idlFactory, {
  agent,
  canisterId: canisterId,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
            <App backendActor={backendActor}>
              <Box>
                <Routes>
                <Route path="/addCar" element = {<AddCar backendActor={backendActor} />}  />
                <Route path="/addCarAndAccounts" element = {<AddCarAndAccounts backendActor={backendActor} />} />
                <Route path="/showCars" element = {<ShowCars backendActor={backendActor} />} />
                <Route path="/showCarsAndAccountas" element = {<ShowCarsAndAccountas backendActor={backendActor} />} />
                <Route path="/addDriverAndAccountant" element = {<AddDriverAndAccountant backendActor={backendActor} />} />
                <Route path="/addUser" element = {<AddUser backendActor={backendActor} />} />
                <Route path="/addCarAndDriver" element = {<AddCarAndDriver backendActor={backendActor} />} />
                <Route path="/addEmpsAndCars" element = {<AddEmpsAndCars backendActor={backendActor} />} />
                <Route path="/addDriverAndHR" element = {<AddDriverAndHR backendActor={backendActor} />} />
                <Route path="/showDriverAndAccounts" element = {<ShowDriverAndAccounts backendActor={backendActor} />} />
                <Route path="/showEmpsAndCar" element = {<ShowEmpsAndCar backendActor={backendActor} />} />
                <Route path="/showCarAndDriver" element = {<ShowCarAndDriver backendActor={backendActor} />} />
                <Route path="/showDriverAndHR" element = {<ShowDriverAndHR backendActor={backendActor} />} /> 
                <Route path="/showUsers" element = {<ShowUsers backendActor={backendActor} />} /> 
                </Routes>
              </Box>
            </App>
          </BrowserRouter>
  </React.StrictMode>
);
