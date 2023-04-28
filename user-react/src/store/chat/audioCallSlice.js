import {createAction, createSlice} from "@reduxjs/toolkit";

const initialState = {
  callId: null
}

const AudioCall = createSlice({
  name:'audioCall',
  initialState,
  reducers: {
    callId: (state, action) => {
      state.callId = action.payload;
    }
  }
})


export const setCallId = createAction("audioCall/callId");

export default AudioCall.reducer;
