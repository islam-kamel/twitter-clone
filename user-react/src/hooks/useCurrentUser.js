import {useEffect, useState} from "react";
import useAxiosPrivate from "./useAxiosPrivate";

const initialUserIdentityValue = {
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
    apiClient.get("api/user/current-user", {signal: controller.signal})
      .then(res => {
        if (res?.status === 200) {
          setCurrentUser(res?.data);
        }
      })

    return () => {
      controller.abort()
    }
  }, [apiClient])


  return currentUser;
}

export default useCurrentUser;
