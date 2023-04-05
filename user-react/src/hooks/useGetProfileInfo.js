import {useEffect, useState} from "react";
import {useUserContext} from "../context/userContext";
import axios from "../apiProvider/axios";

function useGetProfileInfo() {
    const [username, setUsername] = useState(false);
    const {setUserInfo} = useUserContext();

    useEffect(() => {
        const controller = new AbortController();
        if (username) {
            axios.get(`api/user_info/${username}`, {signal: controller.signal})
                .then(res => res.data)
                .then(data => setUserInfo({...data}));
        }

        return () => {
            controller.abort();
        }

    }, [username, setUserInfo])

    return setUsername
}
export default useGetProfileInfo;
