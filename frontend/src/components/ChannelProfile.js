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
            <h2>{"channel.name"}</h2>
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
          {channel.reviews &&
              channel.reviews.map((review) => (
                <ReviewItem review={"review.comment"} user={"review.user.username"} rating={"review.rating"} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
