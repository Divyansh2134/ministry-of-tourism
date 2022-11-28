import React from "react";
import Home from "./pages/Home/Home";
import Typesoftravel from "./pages/typesOfTravel/typesoftravel";
import Media from "./pages/media/media";
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
        <Route path="types" element={<Typesoftravel />}></Route>
      </Routes>
      <Routes>
        <Route path="media" element={<Media />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
