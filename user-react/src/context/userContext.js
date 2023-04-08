import {createContext, useContext, useState} from "react";

// }
type Follower = {
    username: string,
    fullname: string,
    image: string
}

type userInfo = {
    isLogin: boolean,
    id: number,
    following: [
        {
            id: number,
            follower: Follower,
            followee: Follower,
        }
    ], // Followers
    followers: [
        {
            id: number,
            follower: Follower,
            followee: Follower,
        }
    ], // Following
    profile: {
        id: number,
        location: string,
        bio: string,
        image: string,
        cover_image: string,
        website: string,
        user: number
    },
    email: string,
    username: string,
    fullname: string,
    birthdate: string,
    create_at: string,
}

const INITINALData: userInfo = {
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

export const UserContext = createContext(INITINALData);

export const useUserContext = () => {
    return useContext(UserContext);
}

const UserContextProvider = (props: { children: React.Component | React.Component[] }) => {
    const [userInfo, setUserInfo] = useState(INITINALData);

    return (
        <UserContext.Provider value={{userInfo, setUserInfo}}>{props.children}</UserContext.Provider>
    );
}

export default UserContextProvider;
