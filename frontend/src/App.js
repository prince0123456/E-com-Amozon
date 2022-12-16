import logo from './logo.svg';
import './App.css';
import data from './data';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <header>
      <a href="/">amazona</a>
    </header>
    <main>
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
    </Routes>
    
    </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
