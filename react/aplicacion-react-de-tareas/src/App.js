import './App.css';
import freeCodeCampLogo from './imagenes/freeCodeCamp.png';
import ListaDeTareas from './componentes/ListaDeTareas.jsx';

function App() {
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
        alt='Logo de freecodecamp' 
        src={freeCodeCampLogo} 
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div> 
    </div>
  );
}

export default App;
