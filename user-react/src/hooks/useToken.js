import Cookies from "js-cookie";

export default function useToken() {
    const calcTokenAge = (age) => new Date(new Date().getTime() + age * 60)
    const REFRESH_TOKEN_AGE = 365;

    const setToken = (token) => {
        Cookies.set("access_token", token.access_token, {
            secure: true,
            sameSite: "lax",
            expires: calcTokenAge(token.expires_in)
        })

        Cookies.set("refresh_token", token.refresh_token, {
            secure: true,
            expires: REFRESH_TOKEN_AGE,
            sameSite: "lax"
        })
    }

    function getToken(cookieKey) {
        return Cookies.get(`${cookieKey}_token`)
    }

    function removeToken() {
        Cookies.remove('access_token');
        Cookies.remove('refresh_token');
    }
    return {setToken, getToken, removeToken};
}
