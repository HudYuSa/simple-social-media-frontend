import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "../slices/posts/postsSlice";
import userReducer from "../slices/user/userSlice";
import globalReducer from "../slices/global/globalSlice";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    user: userReducer,
    posts: postsReducer,
  },
});
