import { getPosts } from "./postsSlice";

export const getPostsCase = (builder) => {
  builder
    .addCase(getPosts.pending, (state) => {
      state.status = "pending";
    })
    .addCase(getPosts.fulfilled, (state, action) => {
      state.status = "idle";
      state.posts = action.payload.data;
      state.error = false;
    })
    .addCase(getPosts.rejected, (state, action) => {
      state.status = "idle";
      state.error = true;
      state.error.message = action.error.message;
    });
};
