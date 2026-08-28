import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
