import Nav from './Nav';
import Logo from '../images/Logo.svg';

function Header() {
  return (
    <header className="shadow-xl">
      <section className="container">
        <div className="h-20 flex items-center justify-between">
          <img src={Logo} height={50} alt="Little Lemon Logo" />
          <Nav />
        </div>
      </section>
    </header>
  );
}

export default Header;
