import {createContext, useContext, useState} from "react";


const INITINALData = {
  isLogin: false,
  id: 0,
  profile: {
    id: 0,
    location: "",
    bio: "",
    image: "",
    cover_image: "",
    website: "",
    user: 0
  },
  email: "",
  username: "",
  fullname: "",
  birthdate: "",
  create_at: "",
  following: [
    {
      id: 0,
      follower: 0,
      followee: 0,
    }
  ], // Followers
  followers: [
    {
      id: 0,
      follower: 0,
      followee: 0,
    }
  ], // Following
}

export const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
}

const UserContextProvider = (props) => {
  const [userInfo, setUserInfo] = useState(INITINALData);

  return (
    <UserContext.Provider value={{userInfo, setUserInfo}}>{props.children}</UserContext.Provider>
  );
}

export default UserContextProvider;
