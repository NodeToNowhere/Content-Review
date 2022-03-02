import { useState } from "react";
import ReviewService from "../services/ReviewService";
import "../stylesheets/AddReview.css";

const AddReview = ({ user, channel }) => {
  const [review, setReview] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReview({ ...review, [name]: value });
  };
  const saveReview = () => {
    var data = {
      comment: review.comment,
      upvotes: review.upvotes,
    };
    ReviewService.create(data)
      .then((response) => {
        setReview({
          comment: response.data.comment,
          upvotes: null,
          user: {
            id: user.id,
            username: user.username,
            password: user.password,
            email: user.email,
          },
          channel: {
            id: channel.id,
            name: channel.name,
            rating: channel.rating,
          },
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const newReview = () => {
    setReview(ReviewState);
    setSubmitted(false);
  };
  return (
    <div className="submit__form">
      {submitted ? (
        <div>
          <h4>Submitted Review</h4>
          <button className="btn btn__success" onClick={newReview}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form__group">
            <label htmlFor="comment">Review Comment</label>
            <input
              type="text"
              className="form__control"
              id="comment"
              required
              value={review.comment}
              onChange={handleInputChange}
              name="comment"
            />
          </div>

          <button onClick={saveReview} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
export default AddReview;
