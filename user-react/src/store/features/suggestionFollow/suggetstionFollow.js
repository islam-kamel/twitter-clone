import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosInstance} from "../../API/axios";

const initialState = {
  suggestions: [],
  loading: false,
  error: null
}

export const getNewSuggestion = createAsyncThunk('suggestionFollow/getNewSuggestion', async (_, thunkAPI) => {
  try {
    return await axiosInstance.get("/api/user/suggestion-followings").then(res => res.data);
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.message || error.response.data);
  }
})

const suggestionFollow = createSlice({
  name: 'suggestionFollow',
  initialState,

  extraReducers: builder => {
    builder.addCase(getNewSuggestion.pending, (state, action) => {
      state.suggestions = []
      state.loading = true
      state.error = null
    })

    builder.addCase(getNewSuggestion.fulfilled, (state, action) => {
      state.suggestions = action.payload;
      state.loading = false
      state.error = null
    })

    builder.addCase(getNewSuggestion.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  }
})

export default suggestionFollow.reducer;
