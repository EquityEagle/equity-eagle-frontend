import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth";
import SetupReducer from "./setup";
import TradeReducer from "./trade";
import AccountReducer from "./accountmetrix";
import UseAbleReducer from "./useableSlice";

const store = configureStore({
  reducer: {
    AUTH: AuthReducer,
    SETUPS: SetupReducer,
    TRADE: TradeReducer,
    Acc: AccountReducer,
    Immute: UseAbleReducer,
  },
});

export default store;
