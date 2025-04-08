import React from "react";
import "../../assets/UtilityBar.css";
const UtilityBar = () => {
  return (
    <div id="UtilityBar">
      <div className="container">
        <div className="lang_switcher">
          <span>ENG | RU | UZ</span>
        </div>
        <div className="social_links">
          <i class="fa-brands fa-telegram"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
