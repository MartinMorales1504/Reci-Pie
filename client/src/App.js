import React from "react";
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Login from "./components/Login/Login";
import Register from "./components/Register/Register"
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login/>}  />
        <Route exact path="/register" element={<Register/>}  />
      </Routes>
    </div>
  );
}

export default App;
