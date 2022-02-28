import axios from "axios";

const REVIEW_REST_API = "http://localhost:8080/reviews";

class ReviewService {
  getReviews() {
    return axios.get(REVIEW_REST_API);
  }
}

export default new ReviewService();
