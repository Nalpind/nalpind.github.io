import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

function App() {
	return (
		<>
			<HashRouter>
				<div className='flex min-h-screen w-screen flex-col  text-slate-100'>
					<div className=''>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/about' element={<About />} />
						</Routes>
					</div>
				</div>
			</HashRouter>
		</>
	);
}

export default App;
