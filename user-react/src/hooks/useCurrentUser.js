import {useEffect, useState} from "react";
import useAxiosPrivate from "./useAxiosPrivate";

export type UserIdentity = {
    id: number,
    username: string,
    email: string,
    fullname: string,
    image: string,
}

const initialUserIdentityValue: UserIdentity = {
    id: 0,
    username: "",
    email: "",
    fullname: "",
    image: ""
}

function useCurrentUser() {
    const [currentUser, setCurrentUser] = useState(initialUserIdentityValue)
    const apiClient = useAxiosPrivate();

    useEffect(() => {
        const controller = new AbortController()
        const response = apiClient.get("api/user/current-user", {signal: controller.signal});
        response.then(res => {
            if (res?.status === 200) {
                setCurrentUser(value => {
                    return {...value, ...res?.data}
                });
            }
        })
    }, [apiClient])

    return currentUser;
}

export default useCurrentUser;
