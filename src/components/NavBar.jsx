import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className="flex p-4 gap-4 bg-stone-950 text-taupe-100 opacity-50 w-screen">
            <div className="h-full">
                Logo
            </div>
            <nav className='flex gap-4'>
                <NavLink to="/" className={"link"}>Home </NavLink>
                <NavLink to="/about" className={"link"}>About</NavLink>
            </nav>
        </div>
    )
}

export default NavBar;