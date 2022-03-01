import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import ChannelsService from "./services/ChannelService";
import UsersService from "./services/UserService";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import ChannelPage from "./views/ChannelPage";
import UserPage from "./views/UserPage";
import { Switch } from "@material-ui/core";

function App (){
  const [channels, setChannels] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    retrieveChannels();
    retrieveUsers();
  }, []);

  const retrieveChannels = () => {
    ChannelsService.getAll().then((response) => {
      setChannels(response.data);
      console.log(response.data);
    });
  };
  const retrieveUsers = () => {
    UsersService.getAll().then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  };

  return (
    <Routes>
      <Fragment>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/channels" element={<ChannelPage />} />
        <Route exact path="/User" element={<UserPage />} />
      </Fragment>
    </Routes>
  );
};
export default App;
