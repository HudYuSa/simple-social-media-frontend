import { useSelector } from "react-redux";
import Post from "./Post";
import {
  selectAllPosts,
  selectPostsError,
  selectPostsStatus,
} from "../../../slices/posts/postsSlice";
import { useEffect } from "react";

const PostsScrollList = () => {
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(selectPostsStatus);
  const postsError = useSelector(selectPostsError);

  const postsList = posts.map((post, idx) => {
    return (
      <div>
        <Post key={idx} post={post} />
        <hr className="border-darkGray" />
      </div>
    );
  });

  return (
    <div className="mx-auto flex max-w-md flex-col gap-2 py-4 ">
      {postsStatus === "pending" ? (
        <p className="text-center text-2xl text-white">Loading...</p>
      ) : posts.length > 0 ? (
        postsList
      ) : (
        <h1 className="text-center text-xl text-white">
          There are no post to display
        </h1>
      )}
    </div>
  );
};
export default PostsScrollList;
