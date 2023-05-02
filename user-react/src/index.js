import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import "./globalStyle/global.style.scss";
import "@fortawesome/fontawesome-free/css/all.min.css"
import UserContextProvider from "./context/userContext";
import IsLoadingContextProvider from "./context/isLoading";
import {Provider} from "react-redux";
import store from "./store/store";
import LoadingTwitterIcon from "./components/Loading/LoadingTwitterIcon";

// Shared Style
import "./components/explore/explore.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <IsLoadingContextProvider>
        <Provider store={store}>
          <Suspense fallback={<LoadingTwitterIcon show={true}/>}>
            <App/>
          </Suspense>
        </Provider>
      </IsLoadingContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
