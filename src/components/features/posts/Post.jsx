import { Button, Input } from "react-aria-components";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { numberWithCommas } from "../../../utils/number";
import { useSelector } from "react-redux";
import { selectUser } from "../../../slices/user/userSlice";

const Post = ({ post }) => {
  const user = useSelector(selectUser);

  const likes = 23423;
  const comments = 23342;

  return (
    <article className="mb-4">
      <div>
        <p className="text-lg text-white">{post.title}</p>
      </div>
      <div>
        <img className="aspect-auto" src={post.photo} alt="post img" />
      </div>
      <div className="mt-3 flex flex-col gap-1">
        <div className="flex gap-3">
          <Button className={"outline-none"}>
            <AiOutlineHeart className="h-7 w-7" />
          </Button>
          <Button className={"outline-none"}>
            <BiMessageRounded className="h-7 w-7" />
          </Button>
          <Button className={"outline-none"}>
            <IoPaperPlaneOutline className="h-7 w-7" />
          </Button>
        </div>
        <section>
          <p className="text-sm font-bold">{numberWithCommas(likes)} Likes</p>
        </section>
        <div>
          <p className="text-sm">
            <span className="font-bold">{user.name || "anynymous"}</span>{" "}
            {post.content}
          </p>
        </div>
        <div>
          <Button className={"text-lighterGray  text-sm outline-none"}>
            <p>View all {numberWithCommas(comments)} comments</p>
          </Button>
        </div>
        <div>
          {/* <input type="text" placeholder="comment" /> */}
          <Input
            placeholder="Add a comment..."
            className={
              "placeholder-lighterGray w-full bg-transparent text-sm outline-none"
            }
          />
        </div>
      </div>
    </article>
  );
};
export default Post;
