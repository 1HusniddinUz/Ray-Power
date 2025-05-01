import React, { useEffect, useState } from "react";
import "../../assets/UtilityBar.css";

const UtilityBar = ({ changeLang }) => {
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

  const changeLangHandler = (e) => {
    changeLang(e.target.value);
  };

  return (
    <div id="UtilityBar" className={hidden ? "hidden" : ""}>
      <div className="container">
        <div className="lang_switcher">
          <select id="select" onChange={changeLangHandler} defaultValue="ru">
            <option value="ru">🇷🇺 Русский</option>
            <option value="en">🇬🇧 English</option>
            <option value="uz">🇺🇿 O'zbek</option>
          </select>
        </div>
        <div className="social_links">
          <a href="https://t.me/ray_power_uz" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-telegram"></i></a>
          <a href="https://instagram.com/raypower_uz" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://www.youtube.com/@RAY-POWER-UZ" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
