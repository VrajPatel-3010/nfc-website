import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-44-204-204-236.compute-1.amazonaws.com:8080",
  headers: {
    "Content-type": "application/json"
  }
});