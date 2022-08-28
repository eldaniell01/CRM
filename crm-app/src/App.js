import logo from './logo.svg';
import { AppUI } from './components/AppUI';
import { Data, Provider } from './components/ThemeContext';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Dashboard } from './components/Dashboard';
import { Clientes } from './components/Clientes';
import { Proyectos } from './components/Proyectos';
import { Reuniones } from './components/Reuniones';
import { Contactos } from './components/Contactos';

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<AppUI/>} />
        <Route path="/home//*" element={<Dashboard/>}/>
        

      </Routes>
      
    </Provider>
    
  );
}

export default App;
