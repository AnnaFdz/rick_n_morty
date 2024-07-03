import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Card = ({personaje}) => {
  return (
    <div className="col  ">
      <div className="card shadow-sm h-100">
        <img
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225" src={personaje.image} alt="imagen"/>
         
       
        <h3 className="mb-0 text-dark "> {personaje.name}</h3>
        <div className="card-body">
          <p className="card-text">
            Acceder a info sobre el personaje
          </p>
          <div >
            <div className="btn-group d-flex justify-content-between align-items-center">
              <button type="button" className="btn btn-warning my-2 button-color">
              <Link to={`/detail/${personaje.id}`} className="nav-link px-2 ">Detalle</Link>
              </button>
              
            </div>
            <small className="text-body-secondary"></small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
