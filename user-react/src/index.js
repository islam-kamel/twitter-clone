import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import "./globalStyle/global.style.scss";
import "@fortawesome/fontawesome-free/css/all.min.css"
import UserContextProvider from "./context/userContext";
import IsLoadingContextProvider from "./context/isLoading";
import routes from "./router/routes";
import {Provider} from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <IsLoadingContextProvider>
      <Provider store={store}>
        <RouterProvider router={routes}/>
      </Provider>
    </IsLoadingContextProvider>
  </UserContextProvider>
);
