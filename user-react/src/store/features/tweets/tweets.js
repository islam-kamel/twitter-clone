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

export const likeTweet = createAsyncThunk("tweets/likeTweets", async (data, thunkAPI) => {
  try {
    return await axiosInstance.put(`/api/tweet/like/${data.tweetId}`).then(res => res.data);
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.message || error.response.data);
  }
})

export const retweet = createAsyncThunk("tweets/retweet", async (data, thunkAPI) => {
  try {
    if (data.delete) {
      return await axiosInstance.delete(`/api/tweet/retweet/${data.tweetId}`).then(res => res.data);
    }
    return await axiosInstance.put(`/api/tweet/retweet/${data.tweetId}`).then(res => res.data);
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.message || error.response.data);
  }
})

const tweets = createSlice({
  name: "tweets",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTweets.pending, (state) => {
      state.loading = true
      state.error = null;
    })
    builder.addCase(fetchTweets.fulfilled, (state, action) => {
      state.tweets = action.payload
      state.loading = false;
    })
    builder.addCase(fetchTweets.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    })
    /* Like tweet */
    builder.addCase(likeTweet.pending, (state) => {
      state.loading = true
      state.error = null;
    })
    builder.addCase(likeTweet.fulfilled, (state, action) => {
      state.loading = false;
    })
    builder.addCase(likeTweet.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    })
    /* Retweet */
    builder.addCase(retweet.pending, (state) => {
      state.loading = true
      state.error = null;
    })
    builder.addCase(retweet.fulfilled, (state, action) => {
      state.loading = false;
    })
    builder.addCase(retweet.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    })
  }
})

export default tweets.reducer
