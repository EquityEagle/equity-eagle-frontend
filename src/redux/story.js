import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storys: [],
  story: [],
  FETCH_STATUS: null,
  FETCH_ERROR: null,
};

const storySlice = createSlice({
  name: "story",
  initialState,
  reducers: {
    viewStory: (state, action) => {
      state.story = action.payload;
    },
  },
});

export default storySlice.reducer;
export const { viewStory } = storySlice.actions;
