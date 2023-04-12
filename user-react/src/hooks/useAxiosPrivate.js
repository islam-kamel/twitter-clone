import {useEffect} from "react";
import useRefreshToken from "./useRefreshToken";
import {axiosPrivate} from "../apiProvider/axios";
import useToken from "./useToken";


function useAxiosPrivate() {
  const refresh = useRefreshToken();
  const {getToken} = useToken();

  useEffect(() => {

    const requestInterceptors = axiosPrivate.interceptors.request.use(
      config => {
        const refreshToken = getToken("refresh");
        if (!refreshToken) {
          return Promise.reject("NotFound refresh Token")
        }
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${getToken("access")}`
        }
        if (!config.data) {
          config.data = {
            client_id: process.env.REACT_APP_API_ID,
            client_secret: process.env.REACT_APP_API_SECRET,
            refresh_token: refreshToken,
            grant_type: "refresh_token",
          }
        } else {
          config.data = {
            ...config.data,
            client_id: process.env.REACT_APP_API_ID,
            client_secret: process.env.REACT_APP_API_SECRET
          }
        }
        return config;
      },
      (error) => {
        return Promise.reject(error)
      }
    );

    const responseInterceptors = axiosPrivate.interceptors.response.use(
      response => {
        return response;
      },
      async error => {
        const prevRequest = error?.config;
        if (error?.response.status === 401 && !prevRequest?.send) {
          prevRequest.send = true
          const newAccessToken = await refresh().then(res => res?.data?.access_token);
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest)
        }

        return Promise.reject(error)
      }
    );

    return () => {
      console.log("Axios Private Abort");
      axiosPrivate.interceptors.response.eject(responseInterceptors);
      axiosPrivate.interceptors.request.eject(requestInterceptors);
    }
  }, [getToken, refresh])


  return axiosPrivate;
}

export default useAxiosPrivate;
