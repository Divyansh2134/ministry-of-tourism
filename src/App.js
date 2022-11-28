import React from "react";
import Home from "./pages/Home/Home";
import './App.css'
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="ok" element={<h1>ok</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
