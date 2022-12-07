import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddMeeting from './pages/AddMeeting';
import NotFound from './pages/NotFound'
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-meetings" element={<AddMeeting />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );


}

export default App;
