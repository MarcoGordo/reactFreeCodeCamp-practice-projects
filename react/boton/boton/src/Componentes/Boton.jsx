import React from "react";
import '../hojas-de-estilo/boton.css';

function Boton({ texto , setScreenClic}){
  return(
    <button
    className="boton"
      onClick={setScreenClic}>
        {texto}
    </button>
  );  
}

export default Boton;