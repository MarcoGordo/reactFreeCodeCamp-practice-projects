import './App.css';
import Boton from './componentes/Boton';
import freeCodeCampLogo from './imagenes/freeCodeCamp.png';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = ()=> {
    setNumClics(numClics+1);
  }

  function reiniciarContador() {
    setNumClics(0);
  }


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'> 
        <img 
          className='freecodecamp-log'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
         texto='Clic'
         esBotonDeClic={true}
         manejarClic={manejarClic} />
         <Boton 
         texto='reiniciar'
         esBotonDeClic={false}
         manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
