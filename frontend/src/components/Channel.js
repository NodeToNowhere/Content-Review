import React from "react";
import "../stylesheets/Channel.css";
import { Link } from "react-router-dom";
import OC from "../assets/OC.png";
import { useHistory, useParams } from "react-router-dom";

function Channel({ name, rating, id }) {
  return (
    <div className="channel">
      {/* //how to pass id??? */}
      <Link className="channel" to={`/channels/${id}`}>
        <img src={OC} alt="avatar" />
        <p>{name}</p>
        <p>
          <span role="img" aria-label="star">
            ⭐
          </span>{" "}
          {rating}
        </p>
      </Link>
    </div>
  );
}
export default Channel;
