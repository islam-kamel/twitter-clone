import {createContext, useContext, useState} from "react";


const INITIAL_VALUE =  false;

export const IsLoadingContext = createContext(INITIAL_VALUE);

export const useIsLoading = () => useContext(IsLoadingContext);

const IsLoadingContextProvider = ({children}) => {
  const [loadingState, setLoadingSate] = useState(INITIAL_VALUE);

  return (
    <IsLoadingContext.Provider value={{loadingState, setLoadingSate}}>{children}</IsLoadingContext.Provider>
  );
}

export default IsLoadingContextProvider;
