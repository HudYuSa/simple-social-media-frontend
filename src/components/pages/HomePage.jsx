import { useDispatch, useSelector } from "react-redux";
import {
  selectAllPosts,
  getPosts,
  selectPostsError,
  selectPostsStatus,
} from "../../slices/posts/postsSlice";
import { useEffect } from "react";
import { selectRerender } from "../../slices/global/globalSlice";
import PostsScrollList from "../features/posts/PostsScrollList";

const HomePage = () => {
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(selectPostsStatus);
  const postsError = useSelector(selectPostsError);

  const rerender = useSelector(selectRerender);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    console.log("rerender", rerender);
  }, [dispatch, rerender]);

  return (
    <div className="w-full overflow-x-hidden overflow-y-scroll text-white">
      <PostsScrollList posts={posts} />
    </div>
  );
};

export default HomePage;
