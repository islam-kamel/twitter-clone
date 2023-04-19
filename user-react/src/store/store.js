import {configureStore} from "@reduxjs/toolkit";
import tweets from "./features/tweets/tweets";
import currentUser from "./features/user/user";
import replies from "./features/replies/replies";

const store = configureStore({
  reducer: {tweets, currentUser, replies}
})

export default store;
