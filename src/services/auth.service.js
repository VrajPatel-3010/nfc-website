import axios from "axios";

//const API_URL = "http://localhost:8080/api/";
//const API_URL = "http://ec2-44-204-212-251.compute-1.amazonaws.com:8080/api/";
const API_URL = "https://nfc-backend-420900.de.r.appspot.com/api/";

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
    },{headers: {
      "Access-Control-Allow-Origin": '*',
    }})
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


const forgotPassword = (data) => {
  return axios
    .post(API_URL + "forgotPassword", {
      data,
    })
};

const confirmTheme = (id,phone,themeId) => {
  return axios
    .post(API_URL + "updateTheme", {
      id,
      phone,
      themeId,
    }).then((response) => {
      alert('You have successfully selected this theme !')
    })
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  forgotPassword,
  confirmTheme,
};

export default AuthService;