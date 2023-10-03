import React from 'react';
import '../holas-de-estilo/Tarea.css';
import { AiOutlineCloseSquare } from "react-icons/ai";

function Tareas({ id, texto , completada , 
completarTarea, eliminarTarea }){
    return(
      <div className={completada ? 'tarea-contenedor completada' :
      'tarea-contenedor'}>
        <div 
          className='tarea-texto'
          onClick={()=> completarTarea(id)}>
          {texto}
        </div>
        <div className='tarea-contenerdor-iconos'
        onClick={() => eliminarTarea(id)}>
          <AiOutlineCloseSquare className='tarea-icono'/>
        </div>
      </div>
    );
};

export default Tareas;