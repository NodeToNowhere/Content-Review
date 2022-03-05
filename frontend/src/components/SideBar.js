import React, { useEffect, useState } from "react";
import Channel from "./Channel";
import "../stylesheets/SideBar.css";
import image from "../assets/OC.png";

function Sidebar({ channels, users }) {
  const [sortedChannels, setSortedChannels] = useState([]);

  useEffect(() => {
    // sortChannels()
  }, []);

  // SORT BY RATING - FIX
  // function sortChannels() {
  //  setSortedChannels(channels.sort(
  //     (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
  //   ))
  //   console.log(sortedChannels)
  //  }

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        {/* user reviews call */}
        <h5>Reviewed Channels</h5>
        <hl className="horizontal__line"></hl>
        {users[0] &&
          users[0].reviews.map((review) => (
            <Channel
              avatar={image}
              name={review.channel.name}
              rating={review.rating}
            />
          ))}
        {/* High rating DB randoms */}
        <h5>Recommended Channels</h5> <hl className="horizontal__line"></hl>
        {channels &&
          channels.map((channel) => (
            <Channel
              avatar={image}
              name={channel.name}
              rating={channel.averageRating}
              id={channel.name}
            />
          ))}
        {/* <p className="sidebar__ShowMore">Show More</p>{" "} */}
      </div>{" "}
    </div>
  );
}
export default Sidebar;
