import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import ChannelsService from "./services/ChannelService";
import UsersService from "./services/UserService";
import ReviewsService from "./services/ReviewService";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import AllChannelsPage from "./views/AllChannelsPage";
import UserPage from "./views/UserPage";
import ChannelPage from "./views/ChannelPage";

function App() {
  const [channels, setChannels] = useState([]);
  const [users, setUsers] = useState([]);
  const [reviews, setReviews] = useState([]);
  // Have set of images to use for demo

  useEffect(() => {
    retrieveChannels();
    retrieveUsers();
    retrieveReviews();
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
  const retrieveReviews = () => {
    ReviewsService.getAll().then((response) => {
      setReviews(response.data);
      console.log(response.data);
    });
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/channels"
        element={<AllChannelsPage channels={channels} />}
      />
      <Route
        path="/channels/:id"
        element={<ChannelPage />}
        channels={channels.id}
      />
      <Route path="/User" element={<UserPage users={users} />} />
    </Routes>
  );
}
export default App;
