import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth";
import SetupReducer from "./setup";
import TradeReducer from "./trade";
import AccountReducer from "./accountmetrix";
import UseAbleReducer from "./useableSlice";
import UserReducer from "./user";
import NotificationReducer from "./notification";
import ChatReducer from "./chats";
import SystemReducer from "./system";
import storyReducer from "./story";
import SavedReducer from "./saved";

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
    SYSTEM: SystemReducer,
    Story: storyReducer,
    SAVED: SavedReducer,
  },
});

export default store;
