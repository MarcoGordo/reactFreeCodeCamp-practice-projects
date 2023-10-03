import React from "react"; 
import '../hojas-de-estilo/BotonDeClear.css';

const BotonClear = (props) => (
    <div className='boton-clear'
      onClick={()=>props.clearPantalla()}>
        {props.children}
    </div>
);

export default BotonClear;