import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col max-w-[1200px] h-screen mx-auto p-2 md:p-5">
      <Header />
      <div className="flex gap-1 h-full">
        <SideBar />
        <div className="overflow-y-auto bg-white w-full h-full p-2 md:p-5 pt-8 md:pt-16">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
