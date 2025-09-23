import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000" // chỉnh sang http://backend:3000 trong docker-compose
});

export default API;
