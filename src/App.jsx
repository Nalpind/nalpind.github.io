import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Nav from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col h-[300vh] text-slate-100 bg-linear-to-b from-slate-950 via-stone-900 to-black">
          <div className="flex flex-col flex-1">
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
// flex flex-wrap flex-col w-full h-[300vh] bg-slate-900 bg-cover
