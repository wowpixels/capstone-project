import { NavLink } from 'react-router-dom';

function nav() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/reservations">Reservations</NavLink>
        <NavLink to="/order-online">Order Online</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </>
  );
}

export default nav;
