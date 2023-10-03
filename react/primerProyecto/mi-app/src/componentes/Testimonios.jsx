import React from 'react';
import '../hojas-de-estilo/Testimonio.css';
function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
      <img  
        className='imagen-testimonio' 
        src={require(`../imagenes/testimonio-${props.imagen}.jpg`)}
        alt='Foto-de-gato'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} 
        &nbsp;en &nbsp;
        <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>  
    </div>
  );  
}

export default Testimonio;
/*En React existen dos tipos de exportación, por
defecto , y nombrada. La exportación por defecto 
permite decir que este es el único componente que 
se importa de este archivo.
La export nombrada permite, por nombramiento,
exportar varios elementos de un mismo archivo*/