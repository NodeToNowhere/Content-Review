import React, {useEffect, useState} from "react";
import Channel from "./Channel";
import "../stylesheets/SideBar.css";
import image from "../assets/OC.png";

function Sidebar({ channels, users }) {

  const [sortedChannels, setSortedChannels] = useState([])

  useEffect(() => {
    sortChannels()
  }, []);


  function sortChannels() {
   setSortedChannels(channels.sort(
      (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
    ))
   }

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        {/* user reviews call */}
        <h5>Reviewed Channels</h5>
        <hl className="horizontal__line"></hl>
        {users.reviews &&
          users.reviews.map((review) => (
            <Channel
              avatar={image}
              name={"review.channel.name"}
              rating={"review.rating"}
            />
          ))}
        {/* High rating DB randoms */}
        <h5>Recommended Channels</h5> <hl className="horizontal__line"></hl>
        {sortedChannels &&
          sortedChannels.map((review) => (
            <Channel
              avatar={image}
              name={review.channel.name}
              rating={review.rating}
            />
          ))}
        {/* <p className="sidebar__topShowMore">Show More</p>{" "} */}
      </div>{" "}
    </div>
  );
}
export default Sidebar;
