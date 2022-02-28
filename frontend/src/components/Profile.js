import React from "react";
import "./Profile.css";
// import { LiteYouTubeEmbed } from "react-lite-youtube-embed";
import RecentItem from "./RecentItem";
import image from "../assets/OC.png";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__top">
        <div className="profile__topLeft">
          <img src={image} />
          <div className="profile__topLeftDetails">
            <h1>NodeToNowhere</h1>
            <h3>100 followers</h3>
          </div>
        </div>
        <div className="profile__topRight">
          <i className="fas fa-heart graybg"></i>
          <i className="fas fa-bell graybg"></i>
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>
      <div className="profile__menu">
        <h2 className="active">Home</h2>
        <h2>About</h2>
        <h2>Schedule</h2>
        <h2>Videos</h2>
        <h2>
          <i class="fas fa-arrow-up"></i>
        </h2>
        <h2>Chat</h2>
      </div>
      <div className="profile__recent">
        <h2>Recent broadcasts</h2>
        <div className="profile__recentItems">
          <RecentItem url={"LINK-TO-VIDEO"} title={"YOUR VIDEO TITLE"} />
          <RecentItem url={"LINK-TO-VIDEO"} title={"YOUR VIDEO TITLE"} />
          <RecentItem url={"LINK-TO-VIDEO"} title={"YOUR VIDEO TITLE"} />
          <RecentItem url={"LINK-TO-VIDEO"} title={"YOUR VIDEO TITLE"} />{" "}
        </div>
        <div className="profile__categories">
          <h2>NodeToNowhere streamed Categories</h2>
          <img src="category.jpg" />
          <h3>Science & Technology</h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
