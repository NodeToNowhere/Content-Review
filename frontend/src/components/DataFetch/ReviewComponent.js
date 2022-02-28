import ReviewService from "../services/ReviewService";
import React from 'react'

class ReviewComponent extends React.Component {

  constructor(props) {
      super(props)
    this.state = {
      reviews:[]
    }
  }

  componentDidMount() {
    ReviewService.getReviews().then((response) => {
      this.setState({ reviews: response.data });
    });
  }
  render() {
    return (
      <div>
        <h1 className="text-center"> Review List </h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Review Id</td>
              <td> comment</td>
              <td> upvotes</td>
            </tr>
          </thead>
          <tbody>
            {
                this.state.reviews.map(review => 
              <tr key={review.id}>
                <td> {review.id} </td>
                <td> {review.comment}</td>
                <td> {review.upvotes} </td>
              </tr>
            )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default ReviewComponent;
