import { configureStore } from "@reduxjs/toolkit";
import openPostReducer from "../features/openPostSlice";
import PostsReducer from "../features/Posts";

const store = configureStore({
  reducer: { openPost: openPostReducer, Posts: PostsReducer },
});

export default store;