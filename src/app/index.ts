import { configureStore } from "@reduxjs/toolkit";
import posts from "./posts/postsSlice";
import auth from "./auth/authSlice";

const store = configureStore({
  reducer: {
    posts,
    auth, 
  }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export {store};