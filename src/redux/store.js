import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth";
import SetupReducer from "./setup";
import TradeReducer from "./trade";

const store = configureStore({
  reducer: {
    AUTH: AuthReducer,
    SETUPS: SetupReducer,
    TRADE: TradeReducer,
  },
});

export default store;
