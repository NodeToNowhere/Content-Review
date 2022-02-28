import axios from "axios";

const CHANNELS_REST_API = "http://localhost:8080/channels";

class ChannelService {
  getChannels() {
    return axios.get(CHANNELS_REST_API);
  }
}

export default new ChannelService();
