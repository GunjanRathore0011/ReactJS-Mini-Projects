import './App.css';
import { Routes,Route } from 'react-router';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignupForm from './components/SignupForm';
import PrivateRoute from './components/PrivateRoute';

function clickHandler(){
  toast.success("Yehhhhhhhhhh!!!!!Huuuuuuuuuureeeeeeeee");  
}

function App() {
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  return (
    <div className='w-screen h-screen bg-richblack-900 flex flex-col '>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}></Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}></Login>}></Route>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
          }></Route>
      </Routes>
    </div>

    // <div>
    //   <SignupForm></SignupForm>
    // </div>
  );
}

export default App;
