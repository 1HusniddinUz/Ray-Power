import React from "react";
import "../../assets/Header.css";
import Navbar from "../ui/Navbar";
import UtilityBar from "../ui/UtilityBar";
const Header = () => {
  return (
    <header>
      <UtilityBar />
      <Navbar />
    </header>
  );
};

export default Header;
