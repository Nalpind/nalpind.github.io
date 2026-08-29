import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Nav from "./components/NavBar";

function App() {
  return (
    <>
      <div className='bg-slate-950 min-w-screen min-h-screen'>
        <BrowserRouter >
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
