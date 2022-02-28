import axios from "axios";

const USERS_REST_API = "http://localhost:8080/users";

class UserService {
  getUsers() {
    return axios.get(USERS_REST_API);
  }
}

export default new UserService();
