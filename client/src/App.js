import React from "react";
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Login from "./components/Login/Login";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login/>}  />
      </Routes>
    </div>
  );
}

export default App;
