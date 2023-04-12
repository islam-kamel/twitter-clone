import useToken from "./useToken";
import axios from "axios";

function useRefreshToken() {
  const {setToken, getToken} = useToken();
  return async () => {
    const response = await axios.post("http://127.0.0.1:8000/auth/token", {
      client_id: process.env.REACT_APP_API_ID,
      client_secret: process.env.REACT_APP_API_SECRET,
      refresh_token: getToken("refresh"),
      grant_type: "refresh_token",
    }, {
      headers: {"Content-Type": "application/json"},
    })
    if (response.status === 200) {
      setToken(response?.data)
    }
    return response;
  };
}

export default useRefreshToken;
