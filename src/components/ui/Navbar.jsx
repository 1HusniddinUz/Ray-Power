import React, { useState, useEffect } from "react";
import "../../assets/Navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    let lastScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop && currentScroll > 10) {
        setScrollingDown(true);
      } else if (currentScroll < lastScrollTop) {
        setScrollingDown(false);
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    if (!menuOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`navbar ${
        scrollingDown ? "navbar-hidden" : "navbar-visible"
      } ${menuOpen ? "menu-open" : ""}`}
    >
      <div className="container">
        <div className={`logo ${menuOpen ? "open" : ""}`}>
          <a href="#" onClick={closeMenu}>
            RAY POWER
          </a>
        </div>

        <div aria-label="Open menu"
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#AboutUs" onClick={closeMenu}>
                {t(`about`)}
              </a>
            </li>
            <li>
              <a href="#Features" onClick={closeMenu}>
                {t(`services`)}
              </a>
            </li>
            <li>
              <a href="#ContactForm" onClick={closeMenu}>
                {t(`contact`)}
              </a>
            </li>
          </ul>
          {/* 📞 Call center - Faqat mobil menyu uchun */}
          <div className="call_center_mobile">
            <a href="tel:998950036001" onClick={handleLinkClick}>
              +998 95 003 60 01
            </a>
          </div>

          {/* 📲 Social links */}
          <div className="social_links_mobile">
            <a
              href="https://t.me/ray_power_uz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a
              href="https://instagram.com/raypower_uz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/@RAY-POWER-UZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>

          {/* 🌐 Lang switcher */}
          <div className="lang_switcher_mobile">
            <select
              id="select"
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              defaultValue="ru"
            >
              <option value="ru">🇷🇺 Русский</option>
              <option value="en">🇬🇧 English</option>
              <option value="uz">🇺🇿 O'zbek</option>
            </select>
          </div>
        </div>

        {/* 📞 Call center - faqat desktop */}
        <div className="call_center">
          <a href="tel:998950036001" target="_blank" rel="noopener noreferrer">
            +998 95 003 60 01
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
