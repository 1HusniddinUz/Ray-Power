import React, { useState, useEffect } from "react";
import "../../assets/Navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [scrollingDown, setScrollingDown] = useState(false); // Skroll holatini kuzatish uchun state

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        // Pastga skroll qilish
        setScrollingDown(true);
      } else {
        // Yuqoriga skroll qilish
        setScrollingDown(false);
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    // Skroll eventini qo'shish
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Component unmount bo'lganda event listenerni tozalash
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const {t} = useTranslation();

  return (
    <nav className={scrollingDown ? "navbar-hidden" : "navbar-visible"}>
      <div className="container">
        <div className="logo">
          <a href="#">RAY POWER</a>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#AboutUs">{t(`about`)}</a>
            </li>
            <li>
              <a href="#Features">{t(`services`)}</a>
            </li>
            <li>
              <a href="#ContactForm">{t(`contact`)}</a>
            </li>
          </ul>
        </div>
        <div className="call_center">
          <a href="tel:998950036001" target="_blank" rel="noopener noreferrer">+998 95 003 60 01</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
