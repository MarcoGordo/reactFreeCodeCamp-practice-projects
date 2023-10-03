import React from "react";
import '../hojas-de-estilo/pantalla.css';

function Pantalla({ screenText }){
    return(
        <div className="pantalla">
            {screenText}
        </div>
    );
}

export default Pantalla;