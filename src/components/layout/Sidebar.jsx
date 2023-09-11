import { FaHome, FaUser, FaInstagram } from "react-icons/fa";
import { ExploreIcon, MessageIcon, PlusIcon, ReelsIcon } from "../common/Icons";
import { Button } from "react-aria-components";
import { Link } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setRerender } from "../../slices/global/globalSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  const triggerRerender = () => {
    dispatch(setRerender());
  };

  return (
    <aside className="h-full  bg-black">
      <nav className="border-darkGray h-full border-r-2 border-solid">
        <div className="flex h-full flex-col px-6">
          <Link className="pb-8 pt-8" to={"/"} onClick={triggerRerender}>
            <FaInstagram className="h-6 w-6 text-white" />
          </Link>

          <Link className="py-4" to={"/"} onClick={triggerRerender}>
            <FaHome className="h-6 w-6 text-white" />
          </Link>

          <Button
            className={"py-4 outline-none"}
            onPress={() => {
              alert("test");
            }}
          >
            <FaMagnifyingGlass className="h-6 w-6 text-white" />
          </Button>

          <Link className="py-4" to={"/explore"}>
            <ExploreIcon className={"h-6 w-6 fill-white text-white"} />
          </Link>

          <Link className="py-4" to={"/reels"}>
            <ReelsIcon className={"h-6 w-6 fill-white text-white"} />
          </Link>

          <Link className="py-4" to={"/messages"}>
            <MessageIcon className={"h-6 w-6 fill-white text-white"} />
          </Link>

          <Button
            className={"py-4 outline-none"}
            onPress={() => {
              alert("test");
            }}
          >
            <AiOutlineHeart className={"h-6 w-6 fill-white text-white"} />
          </Button>

          <Button
            className={"py-4 outline-none"}
            onPress={() => {
              alert("test");
            }}
          >
            <PlusIcon className={"h-6 w-6 fill-white text-white"} />
          </Button>

          <Link className="py-4" to={"/:userid"}>
            <FaUser className="h-6 w-6 text-white" />
          </Link>
        </div>
      </nav>
    </aside>
  );
};
export default Sidebar;
