import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import "./globalStyle/global.style.scss";
import UserContextProvider from "./context/userContext";
import IsLoadingContextProvider from "./context/isLoading";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <UserContextProvider>
            <IsLoadingContextProvider>
                <App/>
            </IsLoadingContextProvider>
        </UserContextProvider>
    </BrowserRouter>
);
