import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosInstance} from "../../API/axios";

const initialState = {
  replies: [],
  loading: false,
  error: null
}

export const fetchReplies = createAsyncThunk("replies/fetchReplies", async (data, thunkAPI) => {
  try {
    return await axiosInstance.get(`/api/tweet/replies/${data.username}`).then(res => res.data);
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.message || error.response.data);
  }
})


const replies = createSlice({
  name: "replies",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchReplies.pending, (state) => {
      state.loading = true
      state.error = null;
    })
    builder.addCase(fetchReplies.fulfilled, (state, action) => {
      state.replies = action.payload
      state.loading = false;
    })
    builder.addCase(fetchReplies.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    })
  }
})

export default replies.reducer