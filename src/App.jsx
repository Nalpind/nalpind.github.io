import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<HashRouter>
				<div className='flex min-h-screen flex-col bg-linear-to-b from-slate-950 via-stone-900 to-black text-slate-100'>
					<div className='flex grow'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/about' element={<About />} />
						</Routes>
					</div>
					<Footer />
				</div>
			</HashRouter>
		</>
	);
}

export default App;
