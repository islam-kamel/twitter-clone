import {configureStore} from "@reduxjs/toolkit";
import tweets from "./features/tweets/tweets";
import currentUser from "./features/user/user";
import replies from "./features/replies/replies";
import chatV2 from "./chat/chatV2";
import audioCall from "./chat/audioCallSlice";
import suggestionFollow from "./features/suggestionFollow/suggetstionFollow";

const store = configureStore({
  reducer: {tweets, currentUser, replies, chatV2, audioCall, suggestionFollow},
})

export default store;
