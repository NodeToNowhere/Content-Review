import React from "react";
import "./Stream.css";


const Stream = () => {
  return (
    <div className="stream">
      <div className="stream__container">
        <div className="stream__review">
          <div className="stream__reviewContainer">
            <div className="stream__reviewContainerTop">
              <h2>Review form</h2>
            </div>
            <div className="stream__reviewForm">
              <p>Top Review</p>
            </div>
          </div>
        </div>
        <div className="stream__videoEmbed">
          <iframe title="twitch__stream"
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
