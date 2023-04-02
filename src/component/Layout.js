import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const container = {
    width: "90%",
    margin: "100px auto",
  };
  return (
    <div>
      <Navbar />
      <div style={container}>{children}</div>
    </div>
  );
};

export default Layout;
