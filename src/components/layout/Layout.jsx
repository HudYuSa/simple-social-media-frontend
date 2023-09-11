import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import useScreenSize from "../../hooks/useScreenSize";
import { useState } from "react";

const Layout = () => {
  const screenSize = useScreenSize();
  return (
    <div className="min-h-screen w-full flex-grow bg-black">
      {screenSize.width < 500 ? <Header /> : null}

      <div className={screenSize.width > 500 ? "flex h-screen" : ""}>
        {screenSize.width > 500 ? <Sidebar /> : null}
        <Outlet />
      </div>

      {screenSize.width < 500 ? <Navbar /> : null}
    </div>
  );
};
export default Layout;
