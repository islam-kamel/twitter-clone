import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosInstance} from "../API/axios";

const initialState = {
  chatsList: [],
  usersProfiles: [],
  messages: [],
}
export const fetchAllUsersProfiles = createAsyncThunk('chat/fetchAllUserChatInfo', async (data, thunkAPI) => {
  try {
    try {
      const userList = [];
      for (let user of data.usersList) {
        await axiosInstance.get(`/api/user/profile/${user}`).then(res => userList.push(res.data));
      }
      return userList;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.message || error.response.data);
    }
  } catch (e) {

  }
})
const chatV2 = createSlice({
  name: 'chatV2',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchAllUsersProfiles.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    })

    builder.addCase(fetchAllUsersProfiles.fulfilled, (state, action) => {
      state.usersProfiles = action.payload
      state.loading = false;
      state.error = null;
    })
  },
  reducers: {
    chatStatePending: (state) => {
      state.loading = true;
      state.error = null;
    },
    usersChatStateFulfilled: (state, action) => {
      state.loading = false;
      state.error = null;
      state.chatsList = action.payload;
    }
  }
})


export const setChatsInfo = createAction('chatV2/usersChatStateFulfilled')
export const handleChatStatePending = createAction('chatV2/chatStatePending')

export default chatV2.reducer
