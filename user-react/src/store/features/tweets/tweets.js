import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosInstance} from "../../API/axios";

const initialState = {
  tweets: [],
  loading: false,
  error: null
}

export const fetchTweets = createAsyncThunk("tweets/fetchTweets", async (_, thunkAPI) => {
  try {
    return await axiosInstance.get("/api/tweet/").then(res => res.data);
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.message || error.response.data);
  }
})

const tweets = createSlice({
  name: "tweets",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTweets.pending]: (state) => {
      state.loading = true
      state.error = null;
    },

    [fetchTweets.fulfilled]: (state, action) => {
      state.tweets = action.payload
      state.loading = false;
    },
    [fetchTweets.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  },
})

export default tweets.reducer
