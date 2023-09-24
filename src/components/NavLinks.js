import { NavLink } from 'react-router-dom';

function NavLinks(toggleMobileNav) {
  return (
    <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/reservations">Reservations</NavLink>
        <NavLink to="/order-online">Order Online</NavLink>
        <NavLink to="/login">Login</NavLink>
    </>
  );
}

export default NavLinks;
