import { Avatar } from "@material-ui/core";
import React from "react";
import "../stylesheets/ChannelDisplay.css";

function ChannelDisplay({ channels }) {
  return (
    <div className="display__main">
      <div className="channels__container">
        <h3 className="list__title">All Channels</h3>
        <table className="table__main">
          <thead>
            <tr>
              <th>" "</th>
              <th>Name</th>
              <th>Rating</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {channels &&
              channels.map((channel) => (
                <tr key={channel.id}>
                  <td>
                    <Avatar />
                  </td>
                  <td>{channel.name}</td>
                  <td>{channel.rating}</td>
                  <td>{channel.reviews.reviews}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ChannelDisplay;
