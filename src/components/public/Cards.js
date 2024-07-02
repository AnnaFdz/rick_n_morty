import React, { useEffect, useState } from "react";
import RickAndMortyService from "../../services/RickAndMorty.service";
import Card from "./Card";
import Paginacion from "./Paginacion";
import Buscar from "./Buscar";
import Filtros from "./Filtros";

const Cards = ({ buscar }) => {
  //{personajes}
  // console.log("props " +JSON.stringify(props));
  // console.log(props);
  const [paginas, setPaginas] = useState(0);
  const [personajes, setPersonajes] = useState([]);
  const [mensajeError, setMensajeError] = useState("");
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  useEffect(() => {
    //eschucha activa de cambios
    RickAndMortyService.getAllCharacters(page, buscar, status,species,gender)

      .then((data) => {
        if (data.error) {
          setMensajeError(data.error);//("Erro!")
        } else {
          setPersonajes(data.results);
          setPaginas(data.info.pages)
          setMensajeError("")
        }
      })
      .catch((error) => console.log(error));
    console.log(buscar);
  }, [page, buscar, status, gender, species]);
  const cardsList = Array.isArray(personajes)
    ? personajes.map((p) => <Card personaje={p} key={p.id} />)
    : null;
  // const cardsList = personajes.map((p) => <Card personaje={p} key={p.id} />);

  const handleNext = () => {
    if (page < paginas || page < 0) {
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    // if (page < 42 || page > 1) {
    //   setPage(page - 1);
    // }
    if (page <= 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  };

  return (
    <div>
      {/* <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-startcontenido ">
        <Buscar setBuscar={setBuscar} setPage={setPage}/>

        </div> */}
      <div className="contenido">
      <div className="contenidoF" >
        <h2>Filters :</h2>
      
      </div>
      
          <Filtros 
            setStatus={setStatus} 
            setGender={setGender}status={status} 
            gender={gender} 
            species={species} 
            setSpecies={setSpecies}
          />
        
        
      </div>
      <div className="contenido">
          <Paginacion pageChange={handleNext} pagePrev={handlePrev} />
        </div>
      <div className="fondo-principal">
        {mensajeError&&<p>{mensajeError} </p>}
        {!mensajeError&&(
          <> {/* frangmento */}
          <div className="album py-5 bg-body-tertiary ">
          <div className="container fondo-principal">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {cardsList}
            </div>
          </div>
        </div>
        </>
        )}
        
      </div>
    </div>
  );
};

export default Cards;
