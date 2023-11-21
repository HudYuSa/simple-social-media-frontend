import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import useScreenSize from "../../hooks/useScreenSize";
import PopUps from "./PopUps";

const Layout = () => {
  const screenSize = useScreenSize();

  return (
    <div className="min-h-screen w-full flex-grow bg-black">
      {screenSize.width < 750 ? <Header /> : null}

      <div className={screenSize.width > 750 ? "flex h-screen" : ""}>
        {screenSize.width > 750 ? <Sidebar /> : null}
        <PopUps />
      </div>

      {screenSize.width < 750 ? <Navbar /> : null}
    </div>
  );
};
export default Layout;
