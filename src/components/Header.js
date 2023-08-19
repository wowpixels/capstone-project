import Nav from './Nav';
import Logo from '../images/Logo.svg';

function Header() {
  return (
    <header>
      <img src={Logo} height={50} alt="Little Lemon Logo" />
      <Nav />
    </header>
  );
}

export default Header;
