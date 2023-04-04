import {useEffect} from "react";
import useRefreshToken from "./useRefreshToken";
import {axiosPrivate} from "../apiProvider/axios";
import useToken from "./useToken";

function useAxiosPrivate() {
    const refresh = useRefreshToken();
    const {tokens, getToken} = useToken();

    useEffect(() => {
        const responseInterceptors = axiosPrivate.interceptors.response.use(
            response => {
                return response;
            },
            async error => {
                const prevRequest = error?.config;
                if (error?.response?.status === 401 && !prevRequest?.send) {
                    prevRequest.send = true
                    const newAccessToken = await refresh();
                    prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest)
                }
            }
        )
        const requestInterceptors = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers["Authorization"]) {
                    config.headers["Authorization"] = `Bearer ${getToken("access")}`
                }
                if (!config.data) {
                    config.data = {
                        client_id: process.env.REACT_APP_API_ID,
                        client_secret: process.env.REACT_APP_API_SECRET,
                        refresh_token: getToken("refresh"),
                        grant_type: "refresh_token",
                    }
                } else {
                    config.data.client_id = process.env.REACT_APP_API_ID
                    config.data.client_secret = process.env.REACT_APP_API_SECRET
                }

                return config;
            },
            (error) => Promise.reject(error)
        );
        return () => {
            axiosPrivate.interceptors.request.eject(requestInterceptors);
            axiosPrivate.interceptors.response.eject(responseInterceptors);
        }
    }, [getToken, refresh, tokens]);

    return axiosPrivate;
}

export default useAxiosPrivate;
