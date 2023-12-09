import React from "react";
import Login from "./login";
import Register from "./regist";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FaShoppingCart } from "react-icons/fa";


function Navbar({ role }) {


const navigate = useNavigate()


  // console.log(supabase.auth.getSession())
  return (
    <header data-testid="Navbar" className="px-5 d-flex flex-wrap align-items-center justify-content-between border-bottom" style={{ height: "10vh" }}>
      <div className="w-25 mb-0">
        <Link to={role === "user" ? '/' :(role==="toko"?  '/shop' : '/warehouse') } className="d-inline-flex link-body-emphasis text-decoration-none">
          <span className="badge bg-dark fs-5">OnlyCommerce</span>
        </Link>
      </div>

      <ul className="nav w-50 d-none d-lg-flex justify-content-center">
        <li><Link to="/reqstore" className={role === "toko" ? "nav-link px-2 link-body-emphasis" : "d-none"}>Store</Link></li>
        <li><Link to="/req" className={role === "gudang" ? "nav-link px-2 link-body-emphasis" : "d-none"}>Warehouse</Link></li>
        
      </ul>
      {role === "user" ?
        <>
          <div className="w-25 text-end d-none d-lg-block">
            <button type="button" className="btn btn-outline-dark me-2" data-bs-toggle="modal" data-bs-target="#Login">Login</button>
            <Login />
          </div>
        </>
        :
        <div className="w-25 d-block justify-content-end d-flex">
          <button type="button" className="btn btn-outline-dark me-2"  onClick={() => navigate('/')}>Sign Out</button>
           
        </div>
      }
    </header>
  );
}

export default Navbar;