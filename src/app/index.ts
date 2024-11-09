import { configureStore, combineReducers } from "@reduxjs/toolkit";
import posts from "./posts/postsSlice";
import auth from "./auth/authSlice";
import {
  persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken", "user"]
}
const rootReducer = combineReducers({
  posts,
  auth: persistReducer(authPersistConfig, auth),
})
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store)
export { store, persistor };