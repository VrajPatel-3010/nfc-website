import http from "../http-common";

class service {
  getAll() {
    return http.get("/tutorials");
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  getIdList(id) {
    return http.get(`/tutorialList/${id}`);
  }

  create(data) {
    return http.post("/create", data,
    {headers: {'Content-Type': 'multipart/form-data'}});
  }

  update(id, data) {
    return http.put(`/update/${id}`, data,{headers: {'Content-Type': 'multipart/form-data'}});
     }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new service();