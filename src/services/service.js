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
      { headers: { 'Content-Type': 'multipart/form-data' } });
  }

  update(id, data) {
    return http.put(`/update/${id}`, data, { headers: { 'Content-Type': 'multipart/form-data' } });
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

  updatePrice(id, price) {
    return http.put(`/updatePrice/${id}`, price);
  }
  
  inactiveUser(id,status) {
    return http.put(`/inactiveUser/${id}`,status);
  }
  
  confirmCard(data) {
    return http.post("/confirmCard", data,
      { headers: { 'Content-Type': 'multipart/form-data' } });
  }

  getCardInfo(id) {
    return http.get(`/getCardInfo/${id}`);
  }

  getSpecificCardInfo(id) {
    return http.get(`/getSpecificCardInfo/${id}`);
  }

  getAllTeamMember(id) {
    return http.get(`/getAllTeamMember/${id}`);
  }
  
  dataListByPhoneNo(id) {
    return http.get(`/dataListByPhoneNo/${id}`);
  }

  sendConfirmationEmail(id,baseUrl) {
    return http.get(`/sendConfirmationEmail/${id}`,baseUrl);
  }
}

export default new service();