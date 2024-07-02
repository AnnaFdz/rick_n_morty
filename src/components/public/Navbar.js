import React, { useEffect, useState } from "react";
import {  Link } from "react-router-dom";
import "./Main.css";
import Buscar from "./Buscar";
import RickAndMortyService from "../../services/RickAndMorty.service";




const Navbar = ({setBuscar}) => {
 
  return (
    <nav>
      <header className=" text-white colorbk ">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start navbar">
            <spam>
              <img
                className="App-logo"
                src="pngwing.com (2).png"
                alt="reactLogo"
                style={{ height: "80px", width: "80px" }}
              />
            </spam>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2 text-secondary">
                  Home
                </Link>
              </li>
              <li>
                {/* <Link to="/user-form" className="nav-link px-2 text-white">
                  form
                </Link> */}
              </li>
              {/* <li><Link to={"/detail/:id"} className="nav-link px-2 text-white">Detalle</Link></li> */}
              {/* <li><Link href="" className="nav-link px-2 text-white">Pricing</Link></li> */}
              <li>
                <a href="" className="nav-link px-2 text-white">
                  About
                </a>
              </li>
            </ul>

           
            <Buscar setBuscar={setBuscar}/> 

            <div className="text-end">
              {/* <button type="button" className="btn btn-outline-light me-2">
                Login
              </button> */}
              <Link to="/login-form" className="btn btn-outline-light me-2">
                Login
              </Link>
              <Link to="/user-form" className="btn btn-warning">
                Sign-up
              </Link>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
