import {useEffect, useState} from "react";
import axios from "../apiProvider/axios";

function useGetProfileInfo(username: string) {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const controller = new AbortController()
        axios.get(`api/user/profile/${username}`, {signal: controller.signal})
            .then(res => res.data)
            .then(data => setUserInfo({...data}))

        return () => {
            controller.abort();
        }

    }, [username]);

    return userInfo;
}

export default useGetProfileInfo;
