import useToken from "./useToken";
import {axiosPrivate} from "../apiProvider/axios";
import {useContext, useEffect, useState} from "react";
import {IsLoadingContext} from "../context/isLoading";

type Credentials = {
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
    const {setIsLoading} = useContext(IsLoadingContext);

    useEffect(() => {
        const controller = new AbortController();
        const login = async () => {
            setIsLoading(true);
            const response = await axiosPrivate.post("/auth/token", {
                grant_type: "password",
                username: credentials.username,
                password: credentials.password
            }, {signal: controller.signal});

            setTokens(response?.data);
            setIsLoading(false);
            return response?.data['access_token'];
        }

        if (credentials.username && credentials.password) {
            login().then(r => console.log(r));
        }

        return () => {
            controller.abort();
        }
    }, [credentials, setTokens, setIsLoading]);

    return {credentials, setCredentials}
}

export default useAuth;
