import axios from "axios";
import useToken from "./useToken";

function  useRefreshToken() {
    const {tokens, setTokens, getToken} = useToken();

    const refresh = async  () => {
        const response = await axios.post('http://127.0.0.1:8000/auth/token', {
            client_id: process.env.REACT_APP_API_ID,
            client_secret: process.env.REACT_APP_API_SECRET,
            refresh_token: getToken("refresh"),
            grant_type: "refresh_token",
        }, {
            headers: {"Content-Type": "application/json"},
        })
        setTokens({...tokens, ...response?.data})
        return response?.data['access_token'];
    }
    return refresh;
}

export default useRefreshToken;
