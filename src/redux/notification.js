import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../helper/url";

const initialState = {
  NOTIFICATIONS: [],
  FETCH_STATUS: null,
  FETCH_ERROR: null,
};

export const fetchNotifications = createAsyncThunk(
  "notification/fetch",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/notification/${userId}`);
      return response?.data;
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data, {
        position: "top-center",
        className: "toast__alert",
      });
      return rejectWithValue(error.response.data);
    }
  }
);

const NotificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.pending, (state, action) => {
      return { ...state, FETCH_STATUS: "Pending" };
    });
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      return {
        ...state,
        FETCH_STATUS: "Success",
        NOTIFICATIONS: action.payload,
      };
    });
    builder.addCase(fetchNotifications.rejected, (state, action) => {
      return {
        ...state,
        FETCH_STATUS: "Rejected",
        FETCH_ERROR: action.payload,
      };
    });
  },
});

export default NotificationSlice.reducer;
