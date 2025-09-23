import axios from "axios";

const API = axios.create({
  baseURL: ""  // Hoặc "/" – proxy sẽ tự động forward /products tới backend
});

export default API;