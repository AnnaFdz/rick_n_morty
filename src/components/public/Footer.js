import React from 'react'
import {  Link } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear();
    const companyName = "EGG Education";

  return (
    <div className="pie-de-pagina">
     <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0 text-muted">&copy; {year} {companyName} </p>

            <spam>
              <img
                className="App-logo"
                src="pngwing.com (2).png"
                alt="reactLogo"
                style={{ height: "80px", width: "80px" }}
              />
            </spam>
           
            <ul className="nav col-md-4 justify-content-end">   
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Top</a></li> 
                {/* <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>  */}
                
                
                <Link to="/" className="nav-item nav-link px-2 text-muted">
                  Home
                </Link>
            </ul>
        </footer>
  </div>
  )
}

export default Footer
