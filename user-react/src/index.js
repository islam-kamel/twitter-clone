import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import "./globalStyle/global.style.scss";
import UserContextProvider from "./context/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserContextProvider>
                <App/>
            </UserContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
