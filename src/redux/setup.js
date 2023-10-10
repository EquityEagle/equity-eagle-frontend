import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../helper/url";
import { toast } from "react-toastify";

const initialState = {
  IDEAS: [],
  FETCH_STATUS: null,
  FETCH_ERROR: null,
  PUBLISH_STATUS: null,
  PUBLISH_ERROR: null,
};

export const getSetups = createAsyncThunk(
  "setup/all",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/setup`);
      return response?.data;
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data, { position: "top-center" });
      return rejectWithValue(error.response.data);
    }
  }
);

export const publishSetup = createAsyncThunk(
  "setup/publish",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/setup/new/${data.userId}`,
        {
          desc: data.desc,
          image: data.image,
          video: data.video,
          pair: data.pair,
          type: data.type,
        }
      );
      return response?.data;
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data, { position: "top-center" });
      return rejectWithValue(error.response.data);
    }
  }
);

const SetupSlice = createSlice({
  name: "setup",
  initialState,
  reducers: {},
  extraReducers: {
    [publishSetup.pending]: (state, action) => {
      state.PUBLISH_STATUS = "loading";
    },
    [publishSetup.fulfilled]: (state, action) => {
      state.PUBLISH_STATUS = "success";
      toast.success("Setup shared", { position: "top-center" });
      state.IDEAS.shift(action.payload);
    },
    [publishSetup.rejected]: (state, action) => {
      state.PUBLISH_STATUS = "failed";
      state.PUBLISH_ERROR = action.payload;
    },
    [getSetups.pending]: (state, action) => {
      state.FETCH_STATUS = "loading";
    },
    [getSetups.fulfilled]: (state, action) => {
      state.FETCH_STATUS = "success";
      state.IDEAS = action.payload;
    },
    [getSetups.rejected]: (state, action) => {
      state.FETCH_STATUS = "failed";
      state.FETCH_ERROR = action.payload;
    },
  },
});

export default SetupSlice.reducer;
