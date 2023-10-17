import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../helper/url";
import { toast } from "react-toastify";

const initialState = {
  IDEAS: [],
  VIEWD_IDEA: [],
  FETCH_STATUS: null,
  FETCH_ERROR: null,
  PUBLISH_STATUS: null,
  PUBLISH_ERROR: null,
  VIEWD_STATUS: null,
  VIEWD_ERROR: null,
  COMMENT_STATUS: null,
  COMMENT_ERROR: null,
};

export const getSetups = createAsyncThunk(
  "setup/all",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/setup`);
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
      toast.error(error.response.data, {
        position: "top-center",
        className: "toast__alert",
      });
      return rejectWithValue(error.response.data);
    }
  }
);

export const viewSetup = createAsyncThunk(
  "setup/view",
  async (setupId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/setup/${setupId}/one`);
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

export const commentSetup = createAsyncThunk(
  "setup/comment",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/setup/${data.setupId}/${data.userId}/comment`,
        {
          desc: data.desc,
          image: data.image,
        }
      );
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
    [viewSetup.pending]: (state, action) => {
      state.VIEWD_STATUS = "loading";
    },
    [viewSetup.fulfilled]: (state, action) => {
      state.VIEWD_STATUS = "success";
      state.VIEWD_IDEA = action.payload;
    },
    [viewSetup.rejected]: (state, action) => {
      state.VIEWD_STATUS = "failed";
      state.VIEWD_ERROR = action.payload;
    },
    [commentSetup.pending]: (state, action) => {
      state.COMMENT_STATUS = "loading";
    },
    [commentSetup.fulfilled]: (state, action) => {
      state.COMMENT_STATUS = "success";
      toast.success("Comment shared", {
        position: "top-center",
        className: "toast__alert",
      });
    },
    [commentSetup.rejected]: (state, action) => {
      state.COMMENT_STATUS = "failed";
      state.COMMENT_ERROR = action.payload;
    },
  },
});

export default SetupSlice.reducer;
