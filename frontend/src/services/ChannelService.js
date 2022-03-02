import http from "../http-common";
class ChannelsService {
  getAll() {
    return http.get("/channels");
  }
  get(id) {
    return http.get(`/channels/${id}`);
  }
  create(data) {
    return http.post("/channels", data);
  }
  update(id, data) {
    return http.put(`/channels/${id}`, data);
  }
  delete(id) {
    return http.delete(`/channels/${id}`);
  }
  deleteAll() {
    return http.delete(`/channels`);
  }
  findByName(Name) {
    return http.get(`/channels?name=${Name}`);
  }
}
export default new ChannelsService();
