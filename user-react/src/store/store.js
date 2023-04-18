import {configureStore} from "@reduxjs/toolkit";
import tweets from "./features/tweets/tweets";
import currentUser from "./features/user/user";

const store = configureStore({
  reducer: {tweets, currentUser}
})

export default store;
