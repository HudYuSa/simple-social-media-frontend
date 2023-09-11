import Post from "./Post";

const PostsScrollList = ({ posts }) => {
  const PostsList = posts.map((post, idx) => {
    return (
      <div>
        <Post key={idx} post={post} />
        <hr className="border-darkGray" />
      </div>
    );
  });

  return (
    <div className="mx-auto flex max-w-md flex-col gap-2 py-4 ">
      {PostsList}
    </div>
  );
};
export default PostsScrollList;
