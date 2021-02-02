import axios from "axios";

const baseURL = "https://uzukadai.pythonanywhere.com/";

const instance = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  let authKey = localStorage.getItem("token");
  config.headers["Authorization"] = "Bearer " + authKey;
  return config;
});

export default instance;
