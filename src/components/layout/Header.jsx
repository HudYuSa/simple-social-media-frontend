import InstagramLogo from "../features/header/InstagramLogo";
import SearchBar from "../features/header/SearchBar";
import useScreenSize from "../../hooks/useScreenSize";
import { AiOutlineHeart } from "react-icons/ai";

const Header = () => {
  const screenSize = useScreenSize();
  return (
    <header className="sticky top-0 bg-black">
      <div className="flex h-[60px] w-full items-center justify-between px-4">
        <div className={screenSize.width > 450 ? "w-full" : ""}>
          <InstagramLogo className={"w-[6.5rem] text-white"} />
        </div>
        <div className="flex w-full items-center justify-end gap-4">
          <SearchBar />
          <AiOutlineHeart className="h-8 w-8 text-white" />
        </div>
      </div>
      <hr className="border-darkGray" />
    </header>
  );
};
export default Header;
