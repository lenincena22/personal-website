import React, { useState } from "react";
import "./navabar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleNavbarItemClick = () => {
    setShowNavbar(false); // Close the navbar after clicking a navbar item
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Lenin Speel Perk</h1>
      </div>
      <div
        className={`navbar-toggle ${showNavbar ? "open" : ""}`}
        onClick={toggleNavbar}
      >
        <div className="hamburger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
      <ul className={`navbar-links ${showNavbar ? "show" : ""}`}>
        <li>
          <a href="#home" onClick={handleNavbarItemClick}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleNavbarItemClick}>
            About
          </a>
        </li>
        <li>
          <a href="#services" onClick={handleNavbarItemClick}>
            Services
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={handleNavbarItemClick}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#blog" onClick={handleNavbarItemClick}>
            Blog
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleNavbarItemClick}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
