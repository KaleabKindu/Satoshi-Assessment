import React from "react";
import MobileDrawer from "./MobileDrawer";
import { useParams } from "react-router-dom";

// Header component
const Header = () => {
  // Extract the 'id' parameter from the URL
  const { id } = useParams();

  return (
    <div className="flex justify-between">
      {/* Display different text based on whether 'id' is present */}
      <p>{id ? "Project Detail Page" : "Project List Page"}</p>
      {/* Render the MobileDrawer component */}
      <MobileDrawer />
    </div>
  );
};

export default Header;
