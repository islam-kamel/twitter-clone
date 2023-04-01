import {createContext, useState} from "react";

type IsLoading = boolean
const INITIAL_VALUE: IsLoading= false;

export const IsLoadingContext = createContext(INITIAL_VALUE);

const IsLoadingContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(INITIAL_VALUE);

    return (
        <IsLoadingContext.Provider value={{isLoading, setIsLoading}}>{children}</IsLoadingContext.Provider>
    );
}

export default IsLoadingContextProvider;
