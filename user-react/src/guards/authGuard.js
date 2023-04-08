import useAxiosPrivate from "../hooks/useAxiosPrivate";
import {useCallback, useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

function authGuard(Component) {

    const Wrapper = (props) => {
        const apiClient = useAxiosPrivate();
        const [authState, setAuthState] = useState(false);
        const location = useLocation();
        const navigate = useNavigate();

        const goExplore = useCallback(() => {
            navigate("/explore", {state: {from: location}})
        }, [location, navigate])


        useEffect(() => {
            const controller = new AbortController()
            apiClient.get("api/user/is_auth", {signal: controller.signal})
                .then(res => {
                    res?.status === 200 && setAuthState(true)
                })
                .catch(error => {
                    if (!error?.message.includes("canceled")) {
                        setAuthState(false)
                        goExplore();
                    }
                })

            return () => {
                controller.abort();
            }

        }, [apiClient, goExplore])

        return authState && <Component {...props} />;
    }

    return Wrapper;
}

export default authGuard;
