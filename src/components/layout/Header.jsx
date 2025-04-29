import React from "react";
import "../../assets/Header.css";
import Navbar from "../ui/Navbar";
import UtilityBar from "../ui/UtilityBar";
import i18n from "i18next";

const Header = () => {
  const changeLang = (value) =>{
    i18n.changeLanguage(value)
  }
  return (
    <header>
      <UtilityBar  changeLang = {changeLang} />
      <Navbar />
    </header>
  );
};

export default Header;
