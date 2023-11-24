import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../helper/url";

const initialState = {
  TRADES: [],
  AVAILABLE: [],
  FETCH_ONE_STATUS: null,
  FETCH_ONE_ERROR: null,
  FETCH_STATUS: null,
  FETCH_ERROR: null,
};

export const getAvailbleUser = createAsyncThunk(
  "name/ava",
  async (username, { rejectWithValue }) => {
    try {
      const user = await axios.get(`${BASE_URL}/user/one/${username}`);
      return user?.data;
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

export const getUsers = createAsyncThunk(
  "name/get",
  async (username, { rejectWithValue }) => {
    try {
      const user = await axios.get(`${BASE_URL}/user/`);
      return user?.data;
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

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAvailbleUser.pending, (state, action) => {
      return { ...state, FETCH_ONE_STATUS: "Pending" };
    });
    builder.addCase(getAvailbleUser.fulfilled, (state, action) => {
      return {
        ...state,
        FETCH_ONE_STATUS: "Success",
        AVAILABLE: action.payload,
      };
    });
    builder.addCase(getAvailbleUser.rejected, (state, action) => {
      return {
        ...state,
        FETCH_ONE_STATUS: "Rejected",
        FETCH_ONE_ERROR: action.payload,
      };
    });
    builder.addCase(getUsers.pending, (state, action) => {
      return { ...state, FETCH_STATUS: "Pending" };
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      return { ...state, FETCH_STATUS: "Success", TRADES: action.payload };
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      return {
        ...state,
        FETCH_STATUS: "Rejected",
        FETCH_ERROR: action.payload,
      };
    });
  },
});

export default UserSlice.reducer;
