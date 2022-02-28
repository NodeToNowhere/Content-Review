import React, { useEffect, useState } from "react";
import "./Stream.css";
// import axios from "./axios";


const Stream = () => {
  return (
    <div className="stream">
      <div className="stream__container">
        <div className="stream__status">
          <div className="stream__statusContainer">
            <div className="stream__statusContainerTop">
              <div className="stream__statusIndicator">OFFLINE</div>
              <h2>Bio Here</h2>
            </div>
            <div className="stream__statusInfo">
              <p>Top Review</p>
            </div>
          </div>
        </div>
        <div className="stream__videoEmbed">
          <iframe
            width="500"
            height="295"
            src="LINK"
            // Twitch api stream
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Stream;
