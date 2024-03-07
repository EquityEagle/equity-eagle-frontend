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
  DELETE_STATUS: null,
  DELETE_ERROR: null,
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
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/setup/${data.setupId}/${data.userId}/one`
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

export const commentSetup = createAsyncThunk(
  "setup/comment",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
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

export const deleteIdea = createAsyncThunk(
  "idea/delete",
  async (ideaId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${BASE_URL}/setup/${ideaId}/delete`);
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
  reducers: {
    updateIdeaState: (state, action) => {
      const updatedIdeas = [...action.payload, ...state.IDEAS];

      return {
        ...state,
        IDEAS: updatedIdeas,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(publishSetup.pending, (state, action) => {
        return { ...state, PUBLISH_STATUS: "loading" };
      })
      .addCase(publishSetup.fulfilled, (state, action) => {
        toast.success("Setup shared", {
          position: "top-center",
          className: "toast__alert",
        });
        const updatedIdeas = [action.payload, ...state.IDEAS];

        return {
          ...state,
          PUBLISH_STATUS: "success",
          IDEAS: updatedIdeas,
        };
      })
      .addCase(publishSetup.rejected, (state, action) => {
        return {
          ...state,
          PUBLISH_ERROR: action.payload,
          PUBLISH_STATUS: "failed",
        };
      })
      .addCase(getSetups.pending, (state, action) => {
        return {
          ...state,
          FETCH_STATUS: "loading",
        };
      })
      .addCase(getSetups.fulfilled, (state, action) => {
        return {
          ...state,
          FETCH_STATUS: "success",
          IDEAS: action.payload,
        };
      })
      .addCase(getSetups.rejected, (state, action) => {
        return {
          ...state,
          FETCH_ERROR: action.payload,
          FETCH_STATUS: "failed",
        };
      })
      .addCase(viewSetup.pending, (state, action) => {
        return {
          ...state,
          VIEWD_STATUS: "loading",
        };
      })
      .addCase(viewSetup.fulfilled, (state, action) => {
        return {
          ...state,
          VIEWD_STATUS: "success",
          VIEWD_IDEA: action.payload,
        };
      })
      .addCase(viewSetup.rejected, (state, action) => {
        return {
          ...state,
          VIEWD_ERROR: action.payload,
          VIEWD_STATUS: "failed",
        };
      })
      .addCase(commentSetup.pending, (state, action) => {
        return {
          ...state,
          COMMENT_STATUS: "loading",
        };
      })
      .addCase(commentSetup.fulfilled, (state, action) => {
        toast.success("Comment shared", {
          position: "top-center",
          className: "toast__alert",
        });
        return {
          ...state,
          COMMENT_STATUS: "success",
        };
      })
      .addCase(commentSetup.rejected, (state, action) => {
        return {
          ...state,
          COMMENT_ERROR: action.payload,
          COMMENT_STATUS: "failed",
        };
      })
      .addCase(deleteIdea.pending, (state, action) => {
        return {
          ...state,
          DELETE_STATUS: "Pending",
        };
      })
      .addCase(deleteIdea.fulfilled, (state, action) => {
        const updatedIdeas = state.IDEAS.filter(
          (idea) => idea._id !== action.meta.arg
        );

        toast.success("Idea deleted", {
          position: "top-center",
          className: "toast__alert",
        });

        console.log("Filtered Ideas:", updatedIdeas);

        return {
          ...state,
          DELETE_STATUS: "Successful",
          IDEAS: updatedIdeas,
        };
      })

      .addCase(deleteIdea.rejected, (state, action) => {
        return {
          ...state,
          DELETE_ERROR: action.payload,
          DELETE_STATUS: "Rejected",
        };
      });
  },
});

export default SetupSlice.reducer;

export const { updateIdeaState } = SetupSlice.actions;
