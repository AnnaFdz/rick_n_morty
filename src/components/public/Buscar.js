import { useState } from "react";


const Buscar = ({ setBuscar}) => {
  
    const[inputBuscar, setInputBuscar]=useState("");
    const handleChange = (e) => {
        const valor = e.target.value
        
        setInputBuscar(valor)
        setBuscar(valor); 
       
      };
    

  return (
    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
    <input onChange={handleChange}
      type="text"
    //   className="form-control form-control-dark "
      placeholder="Search..."
      aria-label="Search"
    />
  </form>
  )
}

export default Buscar
