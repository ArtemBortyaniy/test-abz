import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { usersReducer } from "./users/slice";
import { positionReducer } from "./positions/slice";
import { tokenReducer } from "./token/slice";
import storage from "redux-persist/lib/storage";

const tokenPersistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    users: usersReducer,
    position: positionReducer,
    token: persistReducer(tokenPersistConfig, tokenReducer),
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
