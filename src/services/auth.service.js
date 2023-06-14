import axios from "axios";

//const API_URL = "http://localhost:8080/api/auth/";
const API_URL = "http://ec2-44-204-204-236.compute-1.amazonaws.com:8080/api/auth/";

const register = (data) => {
  return axios.post(API_URL + "signup", {
   data,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};


const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};


const forgotPassword = (username, password, reTypePassword) => {
  return axios
    .post(API_URL + "forgotPassword", {
      username,
      password,
      reTypePassword,
    })
};



const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  forgotPassword,
};

export default AuthService;