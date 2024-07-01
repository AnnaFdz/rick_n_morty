import React, { useEffect, useState } from "react";
import { useLocation, useParams,Link,  useNavigate  } from "react-router-dom";
import RickAndMortyService from "../../services/RickAndMorty.service";
import "./Main.css";
import { withRouter } from 'react-router-dom';

const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const state = location.state;
  // navigate('/', { state: { from: currentPath } });
  // if (state?.from) {
  //    // Redirects back to the previous unauthenticated routes
  //    navigate(state?.from);
  // }else {
  //    navigate('/');
  //  }


  const [personaje, setPersonaje] = useState({});

  const { id } = useParams();
//   const { pathname } = useLocation();
  useEffect(() => {
    RickAndMortyService.getCharacterById(id)
    .then((data) => setPersonaje(data));
  }, []);

  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-startcontenido card-color ">

    
    <div className="card mb-3 " > 
      <div className=" mt-4 mb-4  "  >
        <div className="col-md-3 ">
          <img
            src={personaje.image}
            className=" rounded-start imgDetalle"
            alt="img del personaje"
          />
        </div>
        <div className="detallePersonaje d-flex flex-wrap align-items-center justify-content-center justify-content-lg-startcontenido">
          <div className="card-body ">
            <h3 className="card-title ">{personaje.name}</h3>
            <p className="card-text">
              Specie: {personaje.species}
            </p>
            <p className="card-text">
               Status: {personaje.status}
            </p>
            <p className="card-text">
               Geneder: {personaje.gender}
            </p>
            
          </div>
          <div className="btn-group" >
                  <button onClick={() => navigate("/", {replace:true})}>back</button>
            {/* <button type="button" className="btn btn-sm btn-success">
              <Link to={"/"} className="nav-link px-2 text-warning ">
                Inicio
              </Link>
            </button> */}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Detail;
