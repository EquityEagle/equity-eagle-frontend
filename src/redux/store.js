import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth";

const store = configureStore({
  reducer: {
    AUTH: AuthReducer,
  },
});

export default store;
