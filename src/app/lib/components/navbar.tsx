import { NavLink } from "./navlink";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar has-bacground-darck">
        <NavLink className="navbar-item is-color-white" href="/">Home</NavLink>
        <NavLink className="navbar-item is-color-white" href="/books">books</NavLink>
        <NavLink className="navbar-item is-color-white" href="/singup">singup</NavLink>
        <NavLink className="navbar-item is-color-white" href="/login">login</NavLink>
      </nav>
    </>
  );
};
    