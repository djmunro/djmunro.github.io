import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { useState } from "react";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");
    const menuNav = document.querySelector(".menu-nav");
    const menuBranding = document.querySelector(".menu-branding");
    const navItems = document.querySelectorAll(".nav-item");

    if (!showMenu) {
      menuBtn.classList.add("close");
      menu.classList.add("show");
      menuNav.classList.add("show");
      menuBranding.classList.add("show");
      navItems.forEach(item => item.classList.add("show"));

      // Set Menu State
      setShowMenu(true);
    } else {
      menuBtn.classList.remove("close");
      menu.classList.remove("show");
      menuNav.classList.remove("show");
      menuBranding.classList.remove("show");
      navItems.forEach(item => item.classList.remove("show"));

      // Set Menu State
      setShowMenu(false);
    }
  };

  return (
    <header>
      <div class="menu-btn" onClick={toggleMenu}>
        <div class="btn-line" />
        <div class="btn-line" />
        <div class="btn-line" />
      </div>

      <nav class="menu">
        <div className="menu-branding">
          <div className="portrait" />
        </div>

        <ul class="menu-nav">
          <li className="nav-item current">
            <Link to="/" className="nav-link" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about/" className="nav-link" onClick={toggleMenu}>
              About
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/work/" className="nav-link">
              My Projects
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to="/contact/" className="nav-link" onClick={toggleMenu}>
              How to Reach Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
