import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosInstance} from "../../API/axios";

const initialState = {
  profile: {},
  loading: {},
  tweets: [],
}


export const fetchProfileInfo = createAsyncThunk('profile/fetch', async (data, thunkAPI) => {
  try {
    return await axiosInstance.get(`/api/user/profile/${data?.username}`).then(res => res.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.message || error.response.data)
  }
})

export const fetchTweetsForUser = createAsyncThunk("user/fetchTweetsForUser", async (data, thunkAPI) => {
  try {
    return await axiosInstance.get(`/api/tweet/${data.username}`).then(res => res.data);
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.message || error.response.data);
  }
})

const profileSlice = createSlice({
  name: 'profile',
  initialState,

  extraReducers: builder => {
    builder.addCase(fetchProfileInfo.pending, state => {
      state.profile = {}
      state.loading = true
    })

    builder.addCase(fetchProfileInfo.fulfilled, (state, action) => {
      state.profile = action.payload
      state.loading = false
    })
    builder.addCase(fetchTweetsForUser.pending, (state) => {
      state.loading = true;
      state.tweets = []
    })
    builder.addCase(fetchTweetsForUser.fulfilled, (state, action) => {
      state.tweets = action.payload;
      state.loading = false;

    })
  }
})

export default profileSlice.reducer