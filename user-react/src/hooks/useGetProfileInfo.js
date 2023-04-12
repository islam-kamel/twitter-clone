import {useEffect, useState} from "react";
import axios from "../apiProvider/axios";
import {useUserContext} from "../context/userContext";

function useGetProfileInfo() {
  const {userInfo, setUserInfo} = useUserContext();
  const [username, setUsername] = useState(false);

  useEffect(() => {
    const controller = new AbortController()

    if (username) {
      axios.get(`api/user/profile/${username}`, {signal: controller.signal})
        .then(res => res.data)
        .then(data => setUserInfo({...data}))
    }

    return () => {
      controller.abort();
    }

  }, [setUserInfo, username]);

  return {userInfo, setUsername};
}

export default useGetProfileInfo;
