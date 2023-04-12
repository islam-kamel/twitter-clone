import useAxiosPrivate from "./useAxiosPrivate";
import useToken from "./useToken";

function useLogout() {
  const axiosPrivate = useAxiosPrivate();
  const {getToken, removeToken} = useToken()

  const logout = async () => {
    const data = {
      token: getToken("access")
    }
    const res = await axiosPrivate.post("auth/revoke-token", data);
    if (res.status === 204) {
      removeToken();
      window.location.reload();
    }
  }

  return logout;
}

export default useLogout;
