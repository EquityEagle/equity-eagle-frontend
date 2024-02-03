import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../helper/url";

const initialState = {
  chat: [],
  chatsdata: [],
  FETCH_STATUS: null,
  FETCH_ERROR: null,
};

export const fetchChats = createAsyncThunk(
  "chat/fetch",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/chat/find/${userId}/all`);
      return response?.data;
    } catch (error) {
      console.log(error.response.data);
      toast.error("Cannot retrieve chats now, Please try again later.", {
        position: "top-center",
        className: "toast__alert",
      });
      return rejectWithValue(error.response.data);
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchChats.pending, (state, action) => {
      return { ...state, FETCH_STATUS: "Pending" };
    });
    builder.addCase(fetchChats.fulfilled, (state, action) => {
      return { ...state, FETCH_STATUS: "Success", chatsdata: action.payload };
    });
    builder.addCase(fetchChats.rejected, (state, action) => {
      return {
        ...state,
        FETCH_STATUS: "Rejected",
        FETCH_ERROR: action.payload,
      };
    });
  },
});

export default ChatSlice.reducer;

export const { chatUser, removeCurrentchat } = ChatSlice.actions;
