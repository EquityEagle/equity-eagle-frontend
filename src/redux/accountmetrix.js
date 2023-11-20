import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../helper/url";
import { toast } from "react-toastify";

const storedUnvisible = localStorage.getItem("unvisible");
const UNVISIBLE_Item = storedUnvisible ? JSON.parse(storedUnvisible) : [];

const initialState = {
  ACCOUNTS: [],
  UNVISIBLE: UNVISIBLE_Item,
  METRIX: [],
  TRACK_STATUS: null,
  TRACK_ERROR: null,
  FETCH_STATUS: null,
  FETCH_ERROR: null,
  METRIX_STATUS: null,
  METRIX_ERROR: null,
  Ids: "",
};

export const SaveTrack = createAsyncThunk(
  "account/track",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/metrix/track/${data.userId}`,
        {
          userId: data.userId,
          accountsize: data.accountsize,
          accounttype: data.accounttype,
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

export const findAllAccount = createAsyncThunk(
  "account/find",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/metrix/find/all`);
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

export const findAccountMetrix = createAsyncThunk(
  "account",
  async (Ids, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/metrix/find/${Ids}/one`);
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

const AccountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    uncheck: (state, action) => {
      const itemId = action.payload._id;
      if (state.UNVISIBLE.includes(itemId)) {
        // Use Immer to produce a new state with the item removed
        state.UNVISIBLE = state.UNVISIBLE.filter((id) => id !== itemId);
      } else {
        // Use Immer to produce a new state with the item added
        state.UNVISIBLE.push(itemId);
      }
    },
    saveId: (state, action) => {
      state.Ids = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SaveTrack.pending, (state, action) => {
      return { ...state, TRACK_STATUS: "Pending" };
    });
    builder.addCase(SaveTrack.fulfilled, (state, action) => {
      toast.success("Account added", {
        position: "top-center",
        className: "toast__alert",
      });
      return {
        ...state,
        TRACK_STATUS: "Success",
        ACCOUNTS: [action.payload, ...state.ACCOUNTS],
      };
    });
    builder.addCase(SaveTrack.rejected, (state, action) => {
      return {
        ...state,
        TRACK_STATUS: "Rejected",
        TRACK_ERROR: action.payload,
      };
    });
    builder.addCase(findAllAccount.pending, (state, action) => {
      return { ...state, FETCH_STATUS: "Pending" };
    });
    builder.addCase(findAllAccount.fulfilled, (state, action) => {
      return { ...state, FETCH_STATUS: "Success", ACCOUNTS: action.payload };
    });
    builder.addCase(findAllAccount.rejected, (state, action) => {
      return {
        ...state,
        FETCH_STATUS: "Rejected",
        FETCH_ERROR: action.payload,
      };
    });
    builder.addCase(findAccountMetrix.pending, (state, action) => {
      return { ...state, METRIX_STATUS: "Pending" };
    });
    builder.addCase(findAccountMetrix.fulfilled, (state, action) => {
      return { ...state, METRIX_STATUS: "Success", METRIX: action.payload };
    });
    builder.addCase(findAccountMetrix.rejected, (state, action) => {
      return {
        ...state,
        METRIX_STATUS: "Rejected",
        METRIX_ERROR: action.payload,
      };
    });
  },
});

export default AccountSlice.reducer;
export const { uncheck, saveId } = AccountSlice.actions;
