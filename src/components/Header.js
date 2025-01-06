import React from "react";
import MobileDrawer from "./MobileDrawer";
import { useParams } from "react-router-dom";

const Header = () => {
  const { id } = useParams();
  console.log("id", id);
  return (
    <div className="flex justify-between">
      <p>{id ? "Project Detail Page" : "Project List Page"}</p>
      <MobileDrawer />
    </div>
  );
};

export default Header;
