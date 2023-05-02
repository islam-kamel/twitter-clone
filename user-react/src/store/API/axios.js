import axios from "axios";
import {axiosPrivate} from "../../apiProvider/axios";
import {Token} from "../../utility/utils";

export default axios.create({
  baseURL: "http://192.168.1.10:8000",
  headers: {
    "Content-Type": "application/json",
  }
})


export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {"Content-Type": "application/json"},
})

const token = new Token();

axiosInstance.interceptors.request.use(
  config => {
    if (!config.headers["Authorization"] && token.getToken('access')) {

      config.headers["Authorization"] = `Bearer ${token.getToken("access")}`
    }

    config.data = {
      ...config.data,
      client_id: process.env.REACT_APP_API_ID,
      client_secret: process.env.REACT_APP_API_SECRET
    }

    return config;
  },

  (error) => {
    return Promise.reject(error)
  }
);

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const prevRequest = error?.config;
    if (error?.response.status === 401 && token.getToken('refresh')) {
      console.log('here')
      const newAccessToken = await token.refreshToken()().then(res => res.data?.access_token);
      prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
      return axiosPrivate(prevRequest)
    }
    return Promise.reject(error)
  }
);
