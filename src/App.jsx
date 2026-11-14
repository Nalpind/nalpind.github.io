import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Project1 from './pages/Project1'
import Project2 from './pages/Project2'
import Project3 from './pages/Project3'

function App() {
    return (
        <>
            <HashRouter>
                <div className="flex min-h-screen w-screen flex-col text-slate-100">
                    <div className="">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/Project1" element={<Project1 />} />
                            <Route path="/Project2" element={<Project2 />} />
                            <Route path="/Project3" element={<Project3 />} />
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        </>
    )
}

export default App
