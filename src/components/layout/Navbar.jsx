import { Link } from "react-router-dom";
import { ExploreIcon, MessageIcon, PlusIcon, ReelsIcon } from "../common/Icons";
import { FaUser, FaHome } from "react-icons/fa";
import { Button } from "react-aria-components";
import { useDispatch } from "react-redux";
import {
  setCreatePostPopUp,
  setRerender,
} from "../../slices/global/globalSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const triggerRender = () => {
    dispatch(setRerender());
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black">
      <hr className="border-darkGray" />
      <div className="flex w-full justify-evenly py-3">
        <Link to={"/"} onClick={triggerRender}>
          <FaHome className="h-6 w-6 text-white" />
        </Link>

        <Link to={"/explore"}>
          <ExploreIcon className={"h-6 w-6 fill-white text-white"} />
        </Link>

        <Link to={"/reels"}>
          <ReelsIcon className={"h-6 w-6 fill-white text-white"} />
        </Link>

        <Button
          className={"outline-none"}
          onPress={() => {
            dispatch(setCreatePostPopUp());
          }}
        >
          <PlusIcon className={"h-6 w-6 fill-white text-white"} />
        </Button>

        <Link to={"/messages"}>
          <MessageIcon className={"h-6 w-6 fill-white text-white"} />
        </Link>

        <Link to={"/:userid"}>
          <FaUser className="h-6 w-6 text-white" />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
