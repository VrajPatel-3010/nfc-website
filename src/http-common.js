import axios from "axios";

export default axios.create({
  baseURL: "http://78.138.17.89/api",
  //baseURL: "http://localhost:8080/api",
  //baseURL:  "https://nfc-backend-420900.de.r.appspot.com/api",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": '*',
  }
});