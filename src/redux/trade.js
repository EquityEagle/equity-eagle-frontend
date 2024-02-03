import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../helper/url";

const initialState = {
  SAVED: [],
  FETCH_STATUS: null,
  FETCH_ERROR: null,
  DOC_STATUS: null,
  DOC_ERROR: null,
  Request_Status: null,
};

const ok = "ok";
// const bad = "failed";
const pending = "pending";

export const DocumentTrade = createAsyncThunk(
  "trade/doc",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/trade/new/${data.trackId}/`,
        {
          accounthash: data.trackId,
          symbol: data.symbol,
          type: data.type,
          lotSize: data.lotSize,
          why: data.why,
          profit: data.profit,
          loss: data.loss,
        }
      );
      return response?.data;
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data || error || error.message, {
        position: "top-center",
        className: "toast__alert",
      });
      return rejectWithValue(error.response.data);
    }
  }
);

const TradeSlice = createSlice({
  name: "trade",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(DocumentTrade.pending, (state, action) => {
      return { ...state, DOC_STATUS: "Loading", Request_Status: pending };
    });
    builder.addCase(DocumentTrade.fulfilled, (state, action) => {
      toast.success("Saved", {
        position: "top-center",
        className: "toast__alert",
      });
      return { ...state, DOC_STATUS: "Success", Request_Status: ok };
    });

    builder.addCase(DocumentTrade.rejected, (state, action) => {
      return {
        ...state,
        DOC_STATUS: "Rejectd",
        DOC_ERROR: action.payload,
        // Request_Status: bad,
      };
    });
  },
});

export default TradeSlice.reducer;
