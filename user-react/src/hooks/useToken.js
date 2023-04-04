import Cookies from "js-cookie";
import {useEffect, useState} from "react";

type CookieKey = "access" | "refresh"

export default function useToken() {
    const [tokens, setTokens] = useState({});

    useEffect(() => {
        for (let key in tokens) {
            if (key === "access_token") {
                const tokenAge = new Date(new Date().getTime() + tokens["expires_in"] * 60)
                Cookies.set(key, tokens[key], {secure: true, sameSite: "lax", expires: tokenAge})
            } else if (key === "refresh_token") {
                Cookies.set(key, tokens[key], {secure: true, expires: 365, sameSite: "lax"})
            }
        }
    }, [tokens])

    function getToken(cookieKey: CookieKey) {
        return Cookies.get(`${cookieKey}_token`)
    }

    return {tokens, setTokens, getToken}
}
