import Nav from './Nav';
import Logo from '../images/Logo.svg';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="shadow-xl">
      <section className="container">
        <div className="h-20 flex items-center justify-between">
          <NavLink className='hover:border-b-0' to="/">
            <img src={Logo} height={50} alt="Little Lemon Logo" />
          </NavLink>
          <Nav />
        </div>
      </section>
    </header>
  );
}

export default Header;
