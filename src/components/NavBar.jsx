import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className="shadow-xl mb-80 flex p-4 gap-4 h-1/48 bg-slate-900 bg-blend-multiply text-taupe-100 w-full">
            <div className="h-full">
                Logo
            </div>
            <nav className='flex gap-4'>
                <NavLink to="/">Home </NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </div>
    )
}

export default NavBar;