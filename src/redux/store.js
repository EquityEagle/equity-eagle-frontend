import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth";
import SetupReducer from "./setup";

const store = configureStore({
  reducer: {
    AUTH: AuthReducer,
    SETUPS: SetupReducer,
  },
});

export default store;
