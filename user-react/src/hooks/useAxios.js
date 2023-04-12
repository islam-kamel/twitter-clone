import axios from "../apiProvider/axios";
import {useCallback, useContext, useEffect} from "react";
import {IsLoadingContext} from "../context/isLoading";

function useAxios() {
  const {setIsLoading} = useContext(IsLoadingContext);
  const setLoading = useCallback(() => setIsLoading(true), [setIsLoading]);
  const removeLoading = useCallback(() => setIsLoading(false), [setIsLoading]);

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      config => {
        setLoading();
        return config;
      },
      error => {
        removeLoading();
        return Promise.reject(error);
      }
    );
    const responseInterceptor = axios.interceptors.response.use(
      response => {
        removeLoading();
        return response;
      },
      error => {
        removeLoading();
        return Promise.reject(error)
      }
    )

    return () => {
      removeLoading();
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    }

  }, [removeLoading, setLoading]);

  return axios;
}

export default useAxios;
