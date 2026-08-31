import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Nav from './components/NavBar';
import Footer from './components/Footer';
import Customizer from './pages/Customizer';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen text-slate-100 bg-linear-to-b from-slate-950 via-stone-900 to-black">
          <Nav />
          <div className='flex-col flex grow'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/customizer" element={<Customizer />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;