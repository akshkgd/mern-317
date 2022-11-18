import {Route, Routes, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <navbar className="navbar">
      <Link to='/'className='link' ><h3>Codekaro</h3></Link>
        

        <div className='nav-links'>
          <Link to='/'className='link' >Home</Link>
          <Link to='/about'className='link' >About</Link>
          <Link to='/newsletter'className='btn' >My Newsletter</Link>
        </div>
      </navbar>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='*' element={<NotFound/>} />

      </Routes>
    </div>
  );
}

export default App;
