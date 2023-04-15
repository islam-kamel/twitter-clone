import {axiosInstance} from "../store/API/axios";


function useAxiosPrivate() {
  return axiosInstance;
}

export default useAxiosPrivate;
