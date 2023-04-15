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

export const fetchAuthState = createAsyncThunk('user/fetchAuthState', async (_, thunkAPI) => {
  try {
    return await axiosInstance.get("api/user/is_auth").then(res => res.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.message || error.response.data)
  }
})

export const login = createAsyncThunk("user/login", async (data, thunkAPI) => {
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

export const logout = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    const token = new Token();
    return await axiosInstance.post("/auth/revoke-token", {
      token: token.getToken('access')
    })
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
    /* Fetch Auth State */
    [fetchAuthState.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.isLogin = false;
    },
    [fetchAuthState.fulfilled]: (state) => {
      state.isLogin = true;
      state.loading = false;
    },
    [fetchAuthState.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.isLogin = false;
    },
    /* Logout */
    [logout.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [logout.fulfilled]: (_) => {
      const token = new Token();
      token.revokeAllToken();
      window.location.reload();
    },
    [logout.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  }
})

export default user.reducer;
export {
  fetchCurrentUserProfile,
}