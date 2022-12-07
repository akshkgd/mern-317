
import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import HooksExample from './components/HooksExample';
import Counter from './components/Counter';
import UseRefDemo from './components/UseRefDemo';
import BillSplit from './components/BillSplit';
import FirebaseDemo from './components/FirebaseDemo';
import Home from './pages/Home';
import AddStudents from './pages/AddStudents';
import Test from './pages/Test';

import NotFound from './pages/NotFound'
function App() {
  return (
    <div className="container">
      <nav className='navbar'>
        <Link to="/" className='logo'>Home</Link>
        <div>
        <Link to="/add-student" className='link'>Add Students</Link>

        </div>
      </nav>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/add-student' element={<AddStudents/>} />
          <Route path='home/test' element={<Test/>} />
          <Route path='*' element={<NotFound/>} />
          
      </Routes>
    </div>
  );
}

export default App;
