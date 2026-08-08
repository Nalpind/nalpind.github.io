import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <ParallaxProvider>
        {/* <BrowserRouter> */}
        {/* <Nav /> */}
        <div style={{ height: '3500px', display: 'flex'}}>
          <About />
        </div>
        {/* <Routes> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* </Routes> */}
        {/* </BrowserRouter> */}
      </ParallaxProvider>
    </>
  );
}

export default App;
