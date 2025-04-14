import React, { useEffect, useState } from "react";
import "../../assets/UtilityBar.css";

const UtilityBar = () => {
  const [hidden, setHidden] = useState(false);
  let lastScrollY = window.scrollY;

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setHidden(true); // pastga scroll qildi — yashir
    } else {
      setHidden(false); // tepaga scroll qildi — ko‘rsat
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div id="UtilityBar" className={hidden ? "hidden" : ""}>
      <div className="container">
        <div className="lang_switcher">
          <span>ENG | RU | UZ</span>
        </div>
        <div className="social_links">
          <i className="fa-brands fa-telegram"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
