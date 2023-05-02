import {createSlice, createAction} from "@reduxjs/toolkit";

const initialState = {
  body: {
    to: null,
    path: null,
    eventDate: null,
    content: null,
    title: null
  },
  myNotifications: {}
}



const notifications = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    writeNotification: (state, action) => {
      state.body = action.payload;
    },

    displayNotification: (state, action) => {
      state.myNotifications[action.payload.id] = action.payload
    }
  }
})

export const writeNotification = createAction('notifications/writeNotification');
export const displayNotification = createAction('notifications/displayNotification');

export default notifications.reducer;
