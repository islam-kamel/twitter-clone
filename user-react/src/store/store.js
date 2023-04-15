import {configureStore} from "@reduxjs/toolkit";
import tweets from "./features/tweets/tweets";
import currentUser from "./features/auth/authentication";

const store = configureStore({
  reducer: {tweets, currentUser}
})

export default store;
