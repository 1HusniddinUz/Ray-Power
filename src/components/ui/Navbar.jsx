import React from "react";
import "../../assets/Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <a href="#">RAY POWER</a>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="call_center">
          <a href="#">+998(91)820-84-46</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
