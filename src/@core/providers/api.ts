import axios from "axios";
import { parseCookies } from "nookies";

const { token } = parseCookies();
const url = "http://127.0.0.1:8000";
const api = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

if (token) {
  api.defaults.headers["authentication"] = `Bearer ${token}`;
}
export default api;
