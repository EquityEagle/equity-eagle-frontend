import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chat: [],
};

const ChatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    chatUser: (state, action) => {
      state.chat = action.payload;
    },
    removeCurrentchat: (state) => {
      state.chat = [];
    },
  },
});

export default ChatSlice.reducer;

export const { chatUser, removeCurrentchat } = ChatSlice.actions;
