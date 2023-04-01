import useToken from "./useToken";
import axios from "../apiProvider/axios";
import {useContext, useEffect, useState} from "react";
import {IsLoadingContext} from "../context/isLoading";

export type Credentials = {
    username: string | boolean,
    password: string | boolean,
}
const INITIAL_VALUE: Credentials = {
    username: false,
    password: false,
}

function useAuth() {
    const {setTokens} = useToken();
    const [credentials, setCredentials] = useState(INITIAL_VALUE)
    const {isLoading, setIsLoading} = useContext(IsLoadingContext);
    const [response, setResponse] = useState(new Promise(() => {}))

    useEffect(() => {
        const controller = new AbortController();
        const login = async () => {
            setIsLoading(true);
            const response = await axios.post("/auth/token", {
                grant_type: "password",
                username: credentials.username,
                password: credentials.password,
                client_id: process.env.REACT_APP_API_ID,

            }, {signal: controller.signal});

            setTokens(response?.data);
            setIsLoading(false);
            return response?.data["access_token"];
        }

        if (credentials.username && credentials.password) {
            setResponse(login())
        }

        return () => {
            controller.abort();
        }
    }, [credentials, setTokens, setIsLoading]);

    return {response, isLoading, setCredentials}
}

export default useAuth;
