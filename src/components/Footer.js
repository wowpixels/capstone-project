import Copyright from './Copyright';
import FooterNav from './FooterNav';
import Logo from '../images/Logo.svg';

function footer() {
  return (
    <footer>
      <div className="bg-black">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 py-20">
            <img
              className="w-60"
              src={Logo}
              height={50}
              alt="Little Lemon Logo"
            />
            <FooterNav />
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
}

export default footer;
