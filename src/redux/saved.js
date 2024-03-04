import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const saveIdeas = localStorage.getItem("savedIdeas");
const deviceSaved = saveIdeas ? JSON.parse(saveIdeas) : [];

const initialState = {
  Saved: deviceSaved,
};

const SavedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    saveIdea: (state, action) => {
      const idea = action.payload;
      const hasSaved = state.Saved?.find((Idea) => Idea._id === idea._id);
      if (hasSaved) {
        const updatedSave = state.Saved?.filter(
          (Idea) => Idea._id !== idea._id
        );
        toast.success("Idea removed from Save", {
          position: "top-center",
          className: "toast__alert",
        });
        localStorage.setItem("savedIdeas", JSON.stringify(updatedSave));
        return {
          ...state,
          Saved: updatedSave,
        };
      } else {
        const updatedSave = Array.isArray(state.Saved)
          ? [...state.Saved, idea]
          : [idea];
        toast.success("Idea added to Save", {
          position: "top-center",
          className: "toast__alert",
        });
        localStorage.setItem("savedIdeas", JSON.stringify(updatedSave));
        return {
          ...state,
          Saved: updatedSave,
        };
      }
    },
  },
});

export default SavedSlice.reducer;
export const { saveIdea } = SavedSlice.actions;
