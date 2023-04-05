import useAxiosPrivate from "../hooks/useAxiosPrivate";
import {useEffect, useState} from "react";

function noneLoginRequire(Component) {

    const Wrapper = (props) => {
        const apiClient = useAxiosPrivate();
        const [renderState, setRenderState] = useState(false);

        useEffect(() => {
            const controller = new AbortController()

            const response = apiClient.get("api/user/is_auth", {signal: controller.signal})
            response.catch(error => {
                console.log(error)
                if (error?.response?.status === 401 || error?.response?.status === 400) {
                    setRenderState(true)
                }
            })

            return () => {
                controller.abort();
            }

        }, [apiClient])


        return renderState && <Component {...props}/>
    }

    return Wrapper;
}

export default noneLoginRequire;
