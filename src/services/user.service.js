import axios from "axios";
import authHeader from "./auth-header";

//const API_URL = "http://localhost:8080/api/";
//const API_URL = "http://ec2-44-204-212-251.compute-1.amazonaws.com:8080/api/";
const API_URL = "https://nfc-backend-420900.de.r.appspot.com/api/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = (username,roles) => {
  return axios.post(API_URL + "admin", { headers: authHeader(),username,roles });
};


const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default UserService;