import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Nav from './components/NavBar';
import Footer from './components/Footer';
import Customizer from './pages/Customizer';

function App() {

  return (
    <>
      <HashRouter>
        <div className="flex min-h-screen flex-col bg-linear-to-b from-slate-950 via-stone-900 to-black text-slate-100">
          <Nav />
          <div className="flex grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/customizerOld" element={<Customizer />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </HashRouter>
    </>
  );
}

export default App;
