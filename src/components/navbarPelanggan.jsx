import React from "react";
import Login from "./login";
import Register from "./regist";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";



function Navbar({role,updateRole}) {





  // console.log(supabase.auth.getSession())
  return (
    <header data-testid="Navbar" className="px-5 d-flex flex-wrap align-items-center justify-content-between border-bottom" style={{height:"10vh"}}>
      <div className="w-25 mb-0">
        <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
          <span className="badge bg-success fs-5">OnlyCommerce</span>
        </Link>
      </div>

      <ul className="nav w-50 d-none d-lg-flex justify-content-center">
        <li><Link to="/" className={role === "toko" ? "nav-link px-2 link-body-emphasis" : "d-none"}>Store</Link></li>
        <li><Link to="/" className={role === "gudang" ? "nav-link px-2 link-body-emphasis" : "d-none"}>Warehouse</Link></li>
      </ul>
      {role==="user" ?
        <>
          <div className="w-25 text-end d-none d-lg-block">
            <button type="button" className="btn btn-outline-success me-2" data-bs-toggle="modal" data-bs-target="#Login">Login</button>
            <Login updateRole={updateRole}/>
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalSignIn">Sign-up</button>
            <Register />
          </div>
        </>
        :
        <div className="w-25 d-block justify-content-end d-flex">
          <button className="m-0 text-end border-0 d-flex gap-2 justify-content-center align-items-center dropdown-toggle" style={{background:"transparent"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            
          </button>
          <ul className="dropdown-menu" >
            <li><button className="dropdown-item" >Sign out</button></li>
          </ul>
        </div>
      }
    </header>
  );
}

export default Navbar;