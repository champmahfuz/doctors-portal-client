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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppioments from './Pages/Dashboard/MyAppioments/MyAppioments';
import MyReview from './Pages/Dashboard/MyAppioments/MyReview';
import MyHistory from './Pages/Dashboard/MyAppioments/MyHistory';
import Users from './Pages/Dashboard/Users';

function App() {


  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="forgetPassword" element={<ForgetPassword />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="appointment" element={<RequireAuth>
          <Appiontment />
        </RequireAuth>} />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyAppioments />}></Route>
          <Route path='review' element={<MyReview />}></Route>
          <Route path='history' element={<MyHistory />}></Route>
          <Route path='users' element={<Users />}></Route>
        </Route>
        <Route path="about" element={<About />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
