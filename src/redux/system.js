import { createSlice } from "@reduxjs/toolkit";
import { systemColors } from "../styles/styled";

const storedTheme = localStorage.getItem("systemTheme");
const systemTheme = storedTheme ? JSON.parse(storedTheme) : "dark";

const storedBg = localStorage.getItem("systemBg");
const systemBg = storedBg ? JSON.parse(storedBg) : systemColors.default;

const storedPair = localStorage.getItem("pairPref");
const storedPref = storedPair ? JSON.parse(storedPair) : [];

const initialState = {
  backgroudColor: systemBg,
  mode: systemTheme,
  pref: storedPref,
  notifications: [],
};

const SystemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    changeMode: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem("systemTheme", JSON.stringify(action.payload));
    },
    changeBackground: (state, action) => {
      state.backgroudColor = action.payload;
      localStorage.setItem("systemBg", JSON.stringify(action.payload));
    },
    setPairPref: (state, action) => {
      const pair = action.payload;
      const hasPair = state.pref?.find((p) => p === pair);
      if (hasPair) {
        const updatedPair = state.pref.filter((p) => p !== pair);
        localStorage.setItem("pairPref", JSON.stringify(state.pref));
        return {
          ...state,
          pref: updatedPair,
        };
      } else {
        const updatedPair = Array.isArray(state.pref)
          ? [...state.pref, pair]
          : [pair];
        localStorage.setItem("pairPref", JSON.stringify(updatedPair));
        return {
          ...state,
          pref: updatedPair,
        };
      }
    },
    setNotification: (state, action) => {
      const updatedNoti = action.payload;
      return {
        ...state,
        notifications: updatedNoti,
      };
    },
  },
});

export default SystemSlice.reducer;

export const { changeMode, changeBackground, setPairPref, setNotification } =
  SystemSlice.actions;
