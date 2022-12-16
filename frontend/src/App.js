
import './App.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <header>
    <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>amazona</Navbar.Brand>
            </LinkContainer>
          </Container>
    </Navbar>
      {/* <Link to="/">amazona</Link> */}
    </header>
    <main>
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/product/:slug' element={<ProductScreen/>}/>
    </Routes>
    
    </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
