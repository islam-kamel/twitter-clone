import useAxiosPrivate from "../hooks/useAxiosPrivate";
import {useCallback, useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

function authGuard(Component) {

    const Wrapper = (props) => {
        const apiClient = useAxiosPrivate();
        const [authState, setAuthState] = useState(false);
        const location = useLocation();
        const navigate = useNavigate();
        const goExplore = useCallback(() => navigate("/explore", {state: {from: location}}), [location, navigate])


        useEffect(() => {
            const controller = new AbortController()

            const response = apiClient.get("api/user/is_auth", {signal: controller.signal})
            response.then(res => {
                res?.status === 200 && setAuthState(true)
            }).catch(_ => goExplore())

            return () => {
                controller.abort();
            }

        }, [apiClient, goExplore])

        return authState && <Component {...props} />;
    }

    return Wrapper;
}

export default authGuard;
