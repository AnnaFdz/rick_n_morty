import React from "react";

const Paginacion = ({pageChange, pagePrev}) => {
  
  return (
    <div>
      <a href="#" className="btn btn-warning my-2 button-color"onClick={pagePrev}>
        Prev Page
      </a>
      <a href="#" className="btn btn-warning my-2 button-color"  onClick={pageChange}>
        Next Page
      </a>
    </div>
  );
};

export default Paginacion;
