import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth";
import SetupReducer from "./setup";
import TradeReducer from "./trade";
import AccountReducer from "./accountmetrix";
import UseAbleReducer from "./useableSlice";
import UserReducer from "./user";
import NotificationReducer from "./notification";
import ChatReducer from "./chats";

const store = configureStore({
  reducer: {
    AUTH: AuthReducer,
    USERS: UserReducer,
    CHATS: ChatReducer,
    SETUPS: SetupReducer,
    TRADE: TradeReducer,
    Acc: AccountReducer,
    Immute: UseAbleReducer,
    NOTIFICATION: NotificationReducer,
  },
});

export default store;
