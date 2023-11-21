import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../slices/posts/postsSlice";
import { useEffect } from "react";
import { selectRerender } from "../../slices/global/globalSlice";
import PostsScrollList from "../features/posts/PostsScrollList";

const HomePage = () => {
  const rerender = useSelector(selectRerender);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, rerender]);

  return (
    <div className="w-full overflow-x-hidden overflow-y-scroll text-white">
      <PostsScrollList />
    </div>
  );
};

export default HomePage;
