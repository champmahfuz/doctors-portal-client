import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Appiontment from './Pages/Appiontment/Appiontment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import ForgetPassword from './Pages/Login/ForgetPassword';

function App() {


  return (
    <div >
      {/* className='max-w-7xl mx-auto px-12' */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="forgetPassword" element={<ForgetPassword />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="appointment" element={<RequireAuth>
          <Appiontment />
        </RequireAuth>} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
