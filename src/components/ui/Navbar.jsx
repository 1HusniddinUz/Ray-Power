import React, { useState, useEffect } from "react";
import "../../assets/Navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      setScrollingDown(currentScroll > lastScrollTop);
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };
  useEffect(() => {
    // 👇 scrollni bloklaymiz
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={scrollingDown ? "navbar-hidden" : "navbar-visible"}>
      <div className="container">
        <div className={`logo ${menuOpen ? "open" : ""}`}>
          <a href="#" onClick={closeMenu}>RAY POWER</a>
        </div>

        <div className={`burger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#AboutUs" onClick={closeMenu}>{t(`about`)}</a>
            </li>
            <li>
              <a href="#Features" onClick={closeMenu}>{t(`services`)}</a>
            </li>
            <li>
              <a href="#ContactForm" onClick={closeMenu}>{t(`contact`)}</a>
            </li>
          </ul>

          {/* 📞 Call center - Faqat mobil menyu uchun */}
          <div className="call_center_mobile">
            <a href="tel:998950036001" onClick={handleLinkClick}>+998 95 003 60 01</a>
          </div>
        </div>

        {/* 📞 Call center - faqat desktop */}
        <div className="call_center">
          <a href="tel:998950036001" target="_blank" rel="noopener noreferrer">+998 95 003 60 01</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
