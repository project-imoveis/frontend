import axios from "axios";

const addressApi = axios.create({
  baseURL: "https://brasilapi.com.br/api/cep/v2/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default addressApi;
