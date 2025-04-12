import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  SiProducthunt,
  SiGoogleanalytics,
  SiOnlyfans,
  SiAboutdotme,
} from "react-icons/si";
import { FaHome } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  const menuItems = [
    { text: "Home", icon: <FaHome />, path: "/" },
    { text: "Products", icon: <SiProducthunt />, path: "/products" },
    { text: "Analytics", icon: <SiGoogleanalytics />, path: "/analytics" },
    { text: "Settings", icon: <SiOnlyfans />, path: "/settings" },
    { text: "About", icon: <SiAboutdotme />, path: "/about" },
  ];

  return (
    <div
      className={`vertical-navbar ${hover ? "hover" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="navbar-list">
        {menuItems.map((item, index) => (
          <li key={index} className="navbar-item">
            <NavLink to={item.path} className="navbar-link">
              <span className="navbar-icon">{item.icon}</span>
              {hover && <span className="navbar-text">{item.text}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
