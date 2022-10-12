import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Appiontment from './Pages/Appiontment/Appiontment';

function App() {


  return (
    <div >
      {/* className='max-w-7xl mx-auto px-12' */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="appointment" element={<Appiontment />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
