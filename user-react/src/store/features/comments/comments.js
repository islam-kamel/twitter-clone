import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosInstance} from "../../API/axios";

const initialState = {
  list: [],
  loading: false,
  error: null
}


export const fetchCommentsList = createAsyncThunk('comments/create', async (data, thunkAPI) => {
  try {
    return await axiosInstance.get(`/api/tweet/comment/${data.tweetId}`).then(res => res.data);
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.message || error.response.data);
  }
})

export const createComment = createAsyncThunk('comments/fetchList', async (data, thunkAPI) => {
  try {
     return await axiosInstance.post(`/api/tweet/comment`, data, {headers: {"Content-Type": "multipart/form-data"}}).then(res => res.data);
  } catch (error) {
    console.log(error)
    thunkAPI.rejectWithValue(error.response.message || error.response.data);
  }
})

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchCommentsList.pending, state => {
      state.loading = true;
      state.error = false;
      state.list = []
    })
    builder.addCase(fetchCommentsList.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.list = action.payload;
    })
    builder.addCase(fetchCommentsList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.list = [];
    })
    builder.addCase(createComment.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload)
      state.list.push(action.payload);
    })
    builder.addCase(createComment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.list = []
    })
  }
})

export default commentsSlice.reducer;