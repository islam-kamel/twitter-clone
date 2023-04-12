import useAxiosPrivate from "../hooks/useAxiosPrivate";
import {useEffect, useState} from "react";

function noneLoginRequire(Component) {

  const Wrapper = (props) => {
    const apiClient = useAxiosPrivate();
    const [renderState, setRenderState] = useState(false);

    useEffect(() => {
      const controller = new AbortController()
      apiClient.get("api/user/is_auth", {signal: controller.signal})
        .then(res => {
          setRenderState(false);
        })
        .catch(error => {
          setRenderState(true)
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
