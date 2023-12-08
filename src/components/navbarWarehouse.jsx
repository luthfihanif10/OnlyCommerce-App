import React from "react";
import { Link } from "react-router-dom";
import { FaListAlt } from "react-icons/fa";
import "./navbar.css";

export const NavbarWarehouse = () => {
  return (
    <div className="navbar">
      <h2 style={{ display: "flex", fontSize: 50, fontWeight: "bold" }}>
        <Link to="/warehouse">OnlyCommerce</Link>
      </h2>

      <div className="links">
        <div>
          <Link to="/reqstore">
            <FaListAlt size={43} />
          </Link>
        </div>
      </div>
    </div>
  );
};