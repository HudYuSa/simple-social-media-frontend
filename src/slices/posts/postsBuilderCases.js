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
      console.log(action);
      state.status = "idle";
      if (action.payload) {
        state.error = action.payload.error;
        state.message = action.payload.message;
      } else {
        state.error = true;
        state.message = null;
      }
    });
};
