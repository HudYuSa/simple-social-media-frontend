import { Link } from "react-router-dom";
import { ExploreIcon, MessageIcon, PlusIcon, ReelsIcon } from "../common/Icons";
import { FaUser, FaHome } from "react-icons/fa";
import { Button } from "react-aria-components";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black">
      <hr className="border-darkGray" />
      <div className="flex w-full justify-evenly py-3">
        <Link to={"/"}>
          <FaHome className="h-6 w-6 text-white" />
        </Link>

        <Link to={"/explore"}>
          <ExploreIcon className={"h-6 w-6 fill-white text-white"} />
        </Link>

        <Link to={"/reels"}>
          <ReelsIcon className={"h-6 w-6 fill-white text-white"} />
        </Link>

        <Button
          onPress={() => {
            alert("test");
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
