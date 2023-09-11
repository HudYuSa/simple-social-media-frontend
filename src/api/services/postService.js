import http from "../../app/http";

const getPosts = () => {
  return http.get("/posts");
};

const GetPostByID = (postID) => {
  return http.get(`/posts/${postID}`);
};

const CreatePost = (post) => {
  return http.post("/posts", post);
};

const UpdatePost = (postID, data) => {
  return http.patch(`/posts/${postID}`, data);
};

const DeletePost = (postID) => {
  return http.delete(`/posts/${postID}`);
};

const postService = {
  getPosts,
  GetPostByID,
  CreatePost,
  UpdatePost,
  DeletePost,
};

export default postService;
