import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosInstance} from "../API/axios";

const initialState = {
  chatsObj: {},
  chatsList: [],
  latestMessages: {},
  usersProfiles: {},
  messages: [],
  unreadMessages: [],
}

// export const fetchAllLatestMessages = createAsyncThunk("chat/fetchAllLatestMessages", async (data, thunkAPI) => {
//   const messagesRef = collection(firebaseDb, "messages");
//   const chatId = data.chatId
//   const receiver = data.receiver;
//
//   if (!chatId) {
//     return;
//   }
//
//   const q = query(
//     messagesRef,
//     where("chat_id", "==", chatId),
//     orderBy("sent_date", "desc"),
//     limit(1)
//   );
//
//   const messagex = onSnapshot(q,
//     (snapshot) => {
//       snapshot.docChanges().forEach(change => {
//         if (change.type === 'added') {
//           console.log('added New Message', change.doc.data())
//         }
//       })
//     }
//   )
//   const message = await getDocs(q)
//
//   if (!message.docs[0]) {
//     return thunkAPI.rejectWithValue()
//   }
//
//   const messageDate = message.docs[0].data()?.sent_date.toJSON()
//   return {user: receiver, message: {...message.docs[0].data(), sent_date: messageDate}}
// })

export const fetchAllUsersProfiles = createAsyncThunk("chat/fetchAllUserChatInfo", async (data, thunkAPI) => {
  try {
    const profile = await axiosInstance.get(`/api/user/profile/${data.username}`);
    return profile.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.message || error.response.data);
  }
})


const chatV2 = createSlice({
  name: "chatV2",
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchAllUsersProfiles.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    })

    builder.addCase(fetchAllUsersProfiles.fulfilled, (state, action) => {
      state.usersProfiles[action.payload.username] = action.payload
      state.loading = false;
      state.error = null;
    })
    // builder.addCase(fetchAllLatestMessages.fulfilled, (state, action) => {
    //   state.latestMessages[action.payload.user] = action.payload;
    // })
  },
  reducers: {
    addNewLastMessage: (state, action) => {
      state.latestMessages[action.payload.user] = action.payload;
    },

    usersChatStateFulfilled: (state, action) => {
      state.loading = false;
      state.error = null;
      state.chatsObj[action.payload.chatId] = action.payload;
    }
  }
})

export const addNewLastMessage = createAction("chatV2/addNewLastMessage")
export const setChatsInfo = createAction("chatV2/usersChatStateFulfilled")
export const handleChatStatePending = createAction("chatV2/chatStatePending")

export default chatV2.reducer
