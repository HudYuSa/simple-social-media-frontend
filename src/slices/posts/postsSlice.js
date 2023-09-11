import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postService from "../../api/services/postService";
import { getPostsCase } from "./postsBuilderCases";

const initialState = {
  posts: [],
  post: null,
  status: "idle",
  error: false,
  message: null,
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const res = await postService.getPosts();
  return res.data;
});

const postSlice = createSlice({
  initialState,
  name: "posts",
  reducers: {},
  extraReducers: (builder) => {
    // add the builder case using function
    getPostsCase(builder);
  },
});

export const selectAllPosts = (state) => state.posts.posts;
export const selectPostsStatus = (state) => state.posts.status;
export const selectPostsError = (state) => state.posts.error;
export const selectPostsErrorMessage = (state) => state.posts.message;

export default postSlice.reducer;
