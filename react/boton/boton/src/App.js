import './App.css';
import Boton from './Componentes/Boton';
import Pantalla from './Componentes/Pantalla.jsx';
import { useState } from 'react';

function App() {

  const [screenText , setScreen] = useState('');

 const setScreenClic = () => {
    setScreen('mundo ');
  }

 const cleenScreen = () =>{
  setScreen('Bye');
 } 

  return (
    <div className="App">
      <div className='contenedor'>
        <Pantalla screenText={screenText}/>
        <Boton texto='Hola'
          setScreenClic={setScreenClic} />
        <Boton texto="Adios" 
          setScreenClic={ cleenScreen } />  
      </div>
    </div>
  );
}

export default App;
