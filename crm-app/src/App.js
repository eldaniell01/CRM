import logo from './logo.svg';
import { AppUI } from './components/AppUI';
import { Data, Provider } from './components/ThemeContext';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Dashboard } from './components/Dashboard';
import { Auth } from './components/Auth';
import { Protect } from './components/Protect';

// componente principal 
function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<AppUI/>} />
        <Route path="/home//*" element={<Dashboard/>}/>
        <Route path='protegida' element={<Auth><Protect/></Auth>}/>

      </Routes>
      
    </Provider>
    
  );
}

export default App;
