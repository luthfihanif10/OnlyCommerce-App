import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaListAlt } from "react-icons/fa";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <h2 style={{ display: "flex", fontSize: 50, fontWeight: "bold" }}>
        <Link to="/">OnlyCommerce</Link>
      </h2>
      <div className="links">
        <div>
          <Link to="/cart">
            <FaShoppingCart size={40} />
          </Link>
        </div>

        <div>
          <Link to="/req">
            <FaListAlt size={43} />
          </Link>
        </div>
      </div>
    </div>
  );
};
