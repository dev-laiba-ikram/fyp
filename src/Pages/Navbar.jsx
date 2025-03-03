import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Home, ShoppingCart, BarChart, Settings } from "@mui/icons-material";
import "./Navbar.css";

const Navbar = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  const items = [
    { text: "Home", icon: <Home />, path: "/" },
    { text: "Products", icon: <ShoppingCart />, path: "/products" },
    { text: "Analytics", icon: <BarChart />, path: "/analytics" },
    { text: "Settings", icon: <Settings />, path: "/settings" },
  ];

  return (
    <Drawer
      variant="permanent"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`vertical-navbar ${hover ? "hover" : ""}`}
    >
      <List>
        {items.map((item, index) => (
          <ListItem
            button
            key={index}
            component={NavLink}
            to={item.path}
            className="list-item"
            activeClassName="active"
          >
            <ListItemIcon className="list-item-icon">{item.icon}</ListItemIcon>
            {hover && (
              <ListItemText primary={item.text} className="list-item-text" />
            )}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Navbar;
