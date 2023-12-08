import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <h2 style={{ display: "flex", fontSize: 50, fontWeight: "bold" }}>
        OnlyCommerce
      </h2>

      <div className="links">
        <Link to="/cart">
          <FaShoppingCart size={40} />
        </Link>
      </div>
    </div>
  );
};
