import React from "react";
import "./Profile.css";
// import { LiteYouTubeEmbed } from "react-lite-youtube-embed";
import RecentItem from "./ReviewItem";
import image from "../assets/OC.png";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__top">
        <div className="profile__topLeft">
          <img src={image} />
          <div className="profile__topLeftDetails">
            <h1>NodeToNowhere</h1> 
            {/* set state */}
            <h3>100 followers</h3>
             {/* api call */}
          </div>
        </div>
        <div className="profile__topRight">
          <i className="fas fa-heart graybg"></i>
        </div>
      </div>
      <div className="profile__recent">
        <h2>Recent Reviews</h2>
        <div className="profile__recentItems">
          <RecentItem review={"review"} user={"user"} />
          <RecentItem review={"review"} user={"user"} />
          <RecentItem review={"review"} user={"user"} />
          <RecentItem review={"review"} user={"user"} />{" "}
        </div>
        </div>
      </div>
    
  );
};

export default Profile;
