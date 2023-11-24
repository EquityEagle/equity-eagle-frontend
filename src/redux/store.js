import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth";
import SetupReducer from "./setup";
import TradeReducer from "./trade";
import AccountReducer from "./accountmetrix";
import UseAbleReducer from "./useableSlice";
import UserReducer from "./user";

const store = configureStore({
  reducer: {
    AUTH: AuthReducer,
    USERS: UserReducer,
    SETUPS: SetupReducer,
    TRADE: TradeReducer,
    Acc: AccountReducer,
    Immute: UseAbleReducer,
  },
});

export default store;
