import Testimonio from './componentes/Testimonios.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className='contenerdor-principal'> 
      <h1>Esto es lo que dicen nuestros alumnos sobre
      freeCodeCamp Animal:</h1>
      
      <Testimonio 
        nombre='Rummy'
        pais='Ecuador'
        imagen='rummy'
        cargo='Ing. Software'
        empresa = 'Google Dogs'
        testimonio='Comence corriendo en el parque pero, tras 
        encontrar freeCodeCamp Animal inicie mi carrera desarrollando
        parques virtuales guau guuauu'
         />
      </div>
      <div>
      <Testimonio 
        nombre='Emma'
        pais='Suecia'
        imagen='kimera'
        cargo='Ing. Software'
        empresa = 'Spotify Cat'
        testimonio='Mi humano no me conciente lo suficiente, así que 
        empece en freeCodeCamp Animal con apps que generan emojis
        de gatitos. Ahora puedo mandarlo a trabajar desde una mejor 
        cama. miauuuu'
         />
         
         <Testimonio 
        nombre='Baloon the Fish Coder'
        pais='México'
        imagen='globo'
        cargo='Desarrollador FrontEnd'
        empresa = 'Google-Fish'
        testimonio='bajo del mar es muy importante la mensajeria.
        Frecuentemente necesitas mandas correspondencia a los 
        mercados. Gracias a FreeCodeCamp Animal, ahora me encargo
        de la mensajería de todo mi acuario.'
         />
      </div>   
    </div>
  );
}

export default App;
