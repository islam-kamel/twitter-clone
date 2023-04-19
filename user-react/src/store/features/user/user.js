import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosInstance} from "../../API/axios";
import {Token} from "../../../utility/utils";

const initialState = {
  isLogin: false,
  userProfile: {},
  tweets: [],
  loading: false,
  error: null
}


export const fetchCurrentUserProfile = createAsyncThunk("user/fetchCurrentUserProfile", async (_, thunkAPI) => {
  try {
    return await axiosInstance.get("/api/user/current-user").then(res => res.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.message || error.response.data)
  }
})

export const fetchAuthState = createAsyncThunk("user/fetchAuthState", async (_, thunkAPI) => {
  try {
    return await axiosInstance.get("/api/user/is_auth").then(res => res.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.message || error.response.data)
  }
})

export const fetchCurrentUserTweets = createAsyncThunk("user/fetchUserTweets", async (data, thunkAPI) => {
  try {
    return await axiosInstance.get(`/api/tweet/${data.username}`).then(res => res.data);
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.message || error.response.data);
  }
})

export const updateUserProfile = createAsyncThunk("user/updateUserProfile", async (data, thunkAPI) => {
  try {
    return await axiosInstance.put(`/api/user/profile/${data?.username}`,
      data,
      {headers: {"Content-Type": "multipart/form-data"}}
    ).then(res => res.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.message || error.response.data)
  }
})

export const login = createAsyncThunk("user/login", async (data, thunkAPI) => {
  try {
    return await axiosInstance.post("/auth/token", {
      grant_type: "password",
      username: data.username,
      password: data.password
    }, {withoutAuth: true}).then(res => res.data)
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.message || error.response.data)
  }
})

export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  try {
    const token = new Token();
    return await axiosInstance.post("/auth/revoke-token", {
      token: token.getToken("access")
    })
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.message || error.response.data)
  }
})
const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: builder => {

    /* Fetch user login reducer */
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.isLogin = false;
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLogin = true;
      state.loading = false;
      const token = new Token();
      token.setToken(action.payload);
    })
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    })
    /* User logout reduce*/
    builder.addCase(logout.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(logout.fulfilled, (state, action) => {
      const token = new Token();
      token.revokeAllToken();
      window.location.reload();
    })
    builder.addCase(logout.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    })
    /* Check Auth State reducer */
    builder.addCase(fetchAuthState.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(fetchAuthState.fulfilled, (state, action) => {
      state.loading = false;
    })
    builder.addCase(fetchAuthState.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    })
    /* Fetch User Tweets Reducer */
    builder.addCase(fetchCurrentUserTweets.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(fetchCurrentUserTweets.fulfilled, (state, action) => {
      state.tweets = action.payload;
      state.loading = false;
    })
    builder.addCase(fetchCurrentUserTweets.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    })
    /* Fetch user profile reducer */
    builder.addCase(fetchCurrentUserProfile.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.isLogin = false;
    })
    builder.addCase(fetchCurrentUserProfile.fulfilled, (state, action) => {
      state.userProfile = action.payload;
      state.isLogin = true;
      state.loading = false;

    })
    builder.addCase(fetchCurrentUserProfile.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    })
    /* Update user profile */
    builder.addCase(updateUserProfile.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.isLogin = false;
    })
    builder.addCase(updateUserProfile.fulfilled, (state, action) => {
      state.userProfile = action.payload;
      state.isLogin = true;
      state.loading = false;

    })
    builder.addCase(updateUserProfile.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    })
  }
})

export default user.reducer;
