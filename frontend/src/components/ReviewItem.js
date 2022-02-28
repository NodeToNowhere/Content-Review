import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ review, user }) => {
  return (
    <div className="item">
        {review}
        <div className="item__detailsText">
          <h4>{user}</h4>
        </div>
      </div>
  );
};

export default ReviewItem;
