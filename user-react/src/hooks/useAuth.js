import useToken from "./useToken";
import axios from "../apiProvider/axios";
import {useContext, useEffect, useState} from "react";
import {IsLoadingContext} from "../context/isLoading";
import {useUserContext} from "../context/userContext";

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
        }

        if (credentials.username && credentials.password) {
            setResponse(login());
        }

        return () => {
            controller.abort();
        }

    }, [credentials, setTokens, setIsLoading]);

    return {response, isLoading, setCredentials}
}


function useProfileInfo() {
    const [username, setUsername] = useState(false);
    const {setUserInfo} = useUserContext();

    useEffect(() => {
        const controller = new AbortController();

        axios.get(`api/user_info/${username}`, { signal: controller.signal })
            .then(res => res.data)
            .then(data => setUserInfo({...data}));

        return () => {
            controller.abort();
        }

    }, [username, setUserInfo])

    return {setUsername}
}


export default useAuth;

export {
    useProfileInfo
}
