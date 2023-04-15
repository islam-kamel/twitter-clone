import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosInstance} from "../../API/axios";
import {Token} from "../../../utility/utils";

const initialState = {
  isLogin: false,
  userProfile: {},
  loading: false,
  error: null
}


const fetchCurrentUserProfile = createAsyncThunk("user/fetchCurrentUserProfile", async (_, thunkAPI) => {
  try {
    return await axiosInstance.get("api/user/current-user").then(res => res.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.message || error.response.data)
  }
})

export const login = createAsyncThunk("users/login", async (data, thunkAPI) => {
  try {
    console.log(data)
    return await axiosInstance.post("/auth/token", {
      grant_type: "password",
      username: data.username,
      password: data.password
    }, {withoutAuth: true}).then(res => res.data)
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.message || error.response.data)
  }
})

const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    /* Fetch user profile reducer */
    [fetchCurrentUserProfile.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.isLogin = false;
    },
    [fetchCurrentUserProfile.fulfilled]: (state, action) => {
      state.userProfile = action.payload;
      state.isLogin = true;
      state.loading = false;
    },
    [fetchCurrentUserProfile.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [login.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.isLogin = false;
    },
    /* Login Reducer */
    [login.fulfilled]: (state, action) => {
      state.isLogin = true;
      state.loading = false;
      const token = new Token();
      token.setToken(action.payload);
    },
    [login.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  }
})

export default user.reducer;
export {
  fetchCurrentUserProfile,
}
