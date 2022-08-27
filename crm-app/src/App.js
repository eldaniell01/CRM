import logo from './logo.svg';
import { AppUI } from './components/AppUI';
import { Data, Provider } from './components/ThemeContext';
import './App.css';

function App() {
  return (
    <Provider>
      <AppUI/>
    </Provider>
    
  );
}

export default App;
