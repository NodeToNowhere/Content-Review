import React from "react";
import "../stylesheets/ChannelProfile.css";
import ReviewItem from "./ReviewItem";
import image from "../assets/OC.png";

function Profile({channel}) {
  return (
    <div className="profile">
      <div className="profile__top">
        <div className="profile__topLeft">
          <img src={image} alt="profile_img" />
          <div className="profile__topLeftDetails">
            <h1>NodeToNowhere</h1>
            {/* set name  */}
            <h3>100 followers</h3>
            {/* api call twitch*/}
          </div>
        </div>
        <div className="profile__topRight">
          {/* add favourite */}
          <i className="fas fa-heart graybg"></i>
        </div>
      </div>
      <div className="profile__recent">
        <h2>Recent Reviews</h2>
        <div className="profile__reviewItems">
          <ReviewItem review={"review"} user={"user"} rating={"5"} />
          <ReviewItem review={"review"} user={"user"} rating={"5"} />
          <ReviewItem review={"review"} user={"user"} rating={"5"} />
          <ReviewItem review={"review"} user={"user"} rating={"5"} />{" "}
        </div>
      </div>
    </div>
  );
}

export default Profile;
