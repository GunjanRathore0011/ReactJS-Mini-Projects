import React from "react";
import './App.css';
import {Routes,Route} from "react-router";
import Submitform from "./Submitform";
import Home from "./Home";

function App() {
  
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/submit" element={<Submitform></Submitform>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;