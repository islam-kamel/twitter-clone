import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import "./globalStyle/global.style.scss";
import UserContextProvider from "./context/userContext";
import IsLoadingContextProvider from "./context/isLoading";
import routes from "./router/routes";

// Used in different components
import "@fortawesome/fontawesome-free/css/all.min.css"
// import "./components/home/home.style.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <IsLoadingContextProvider>
      <RouterProvider router={routes}/>
    </IsLoadingContextProvider>
  </UserContextProvider>
);
