import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";


function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center " >
      <div className="w-full bg-slate-900 ">
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home className=""></Home>} />
        <Route path="/cart" element={<Cart></Cart>} />
      </Routes>
    </div>

  );
}

export default App;
