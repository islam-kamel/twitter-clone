import {createContext, useContext, useState} from "react";

type userInfo = {
    isLogin: boolean,
    id: number,
    profile: {
        id: number,
        location: string,
        bio: string,
        image: string,
        user: number
    },
    email: string,
    username: string,
    fullname: string,
    birthdate: string,
    create_at: string,
}

const INITINALData: userInfo = {
    isLoging: false,
    id: 0,
    profile: {
        id: 0,
        location: '',
        bio: '',
        image: '',
        user: 0
    },
    email: '',
    username: '',
    fullname: '',
    birthdate: '',
    create_at: '',
}

export const UserContext = createContext(INITINALData);

export const useUserContext = () => {
    return useContext(UserContext);
}

const UserContextProvider = (props:{children: React.Component | React.Component[]}) => {
    const [userInfo, setUserInfo] = useState(INITINALData);

    return (
        <UserContext.Provider value={[{...userInfo}, setUserInfo]}>{props.children}</UserContext.Provider>
    );
}

export default UserContextProvider;
