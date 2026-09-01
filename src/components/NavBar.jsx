import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="flex h-1/48 w-full gap-4 bg-slate-900 p-4 text-taupe-100 bg-blend-multiply shadow-xl">
      <div className="h-full">Logo</div>
      <nav className="flex gap-4">
        <NavLink to="/">Home </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/customizer">Customizer</NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
