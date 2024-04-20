import axios from "axios";

export default axios.create({
  //baseURL: "http://ec2-44-204-212-251.compute-1.amazonaws.com:8080/api",
  //baseURL: "http://localhost:8080/api",
  baseURL:  "https://nfc-backend-420900.de.r.appspot.com/api",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": '*',
  }
});