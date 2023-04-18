import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import "./globalStyle/global.style.scss";
import "@fortawesome/fontawesome-free/css/all.min.css"
import UserContextProvider from "./context/userContext";
import IsLoadingContextProvider from "./context/isLoading";
import routes from "./router/routes";
import {Provider} from "react-redux";
import store from "./store/store";
import LoadingTwitterIcon from "./components/Loading/LoadingTwitterIcon";

// Shared Style
import "./components/explore/explore.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <IsLoadingContextProvider>
      <Provider store={store}>
        <Suspense fallback={<LoadingTwitterIcon show={true}/>}>
          <RouterProvider router={routes}/>
        </Suspense>
      </Provider>
    </IsLoadingContextProvider>
  </UserContextProvider>
);
