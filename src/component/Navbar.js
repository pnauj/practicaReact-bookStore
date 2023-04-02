import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navBarContainer = {
    backgroundColor: "#181d27",
    padding: "10px",
    display: "flex",
    gap: "5px",
    justifyContent: "center",
  };

  const linkContainer = {
    padding: "10px",
    display: "block",
    fontSize: "18px",
    color: "white",
    textDecoration: "none",
  };
  return (
    <div style={navBarContainer}>
      <Link to="/" style={linkContainer}>
        Home
      </Link>
      <Link to="/create" style={linkContainer}>
        Create
      </Link>
    </div>
  );
};

export default Navbar;
