import {useCallback, useContext, useEffect} from "react";
import useRefreshToken from "./useRefreshToken";
import {axiosPrivate} from "../apiProvider/axios";
import useToken from "./useToken";
import {IsLoadingContext} from "../context/isLoading";

function useAxiosPrivate() {
    const refresh = useRefreshToken();
    const {getToken} = useToken();
    const {setIsLoading} = useContext(IsLoadingContext);

    const setLoading = useCallback(() => setIsLoading(true), [setIsLoading]);
    const removeLoading = useCallback(() => setIsLoading(false), [setIsLoading]);

    useEffect(() => {
        const responseInterceptors = axiosPrivate.interceptors.response.use(
            response => {
                removeLoading();
                return response;
            },
            async error => {
                removeLoading();
                const prevRequest = error?.config;
                if (error?.response?.status === 401 && !prevRequest?.send) {
                    prevRequest.send = true
                    const newAccessToken = await refresh().then(res => res?.data?.access_token);
                    prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest)
                }
            }
        )
        const requestInterceptors = axiosPrivate.interceptors.request.use(
            config => {
                setLoading();
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
            (error) => {
                removeLoading();
                return Promise.reject(error)
            }
        );
        return () => {
            removeLoading();
            axiosPrivate.interceptors.request.eject(requestInterceptors);
            axiosPrivate.interceptors.response.eject(responseInterceptors);
        }
    }, [getToken, refresh, removeLoading, setLoading]);

    return axiosPrivate;
}

export default useAxiosPrivate;
