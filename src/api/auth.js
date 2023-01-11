import axiosClient from "./axiosClient";
import env from "../config/env";

const baseURL = env.HOST_UIPARS;
const authApi = {
  login(data) {
    // const url = "/api/account/Login";
    const url = "/api/API/GetNumerologies";
    console.log("RUn api");
    return axiosClient.post(url, data);
  },
  register(data) {
    const url = "/api/API/GetNumerologies";
    return axiosClient.post(`${baseURL + url}`, data);
  }
};

export default authApi;
