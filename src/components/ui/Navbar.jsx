import React, { useState, useEffect } from "react";
import "../../assets/Navbar.css";

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

  return (
    <nav className={scrollingDown ? "navbar-hidden" : "navbar-visible"}>
      <div className="container">
        <div className="logo">
          <a href="#">RAY POWER</a>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#AboutUs">About</a>
            </li>
            <li>
              <a href="#Features">Services</a>
            </li>
            <li>
              <a href="#ContactForm">Contact</a>
            </li>
          </ul>
        </div>
        <div className="call_center">
          <a href="tel:998918208446" target="_blank" rel="noopener noreferrer">+998(91)820-84-46</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
