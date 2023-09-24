import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';

function FooterNav() {
  return (
    <section>
      <div>
        <h3 className="text-white">Navigation</h3>
        <nav>
          <NavLinks />
        </nav>
      </div>
      <div>
        <h3 className="text-white">Contact</h3>
        <ul>
          <li>
            <address className="text-white">
              Street 100, 1234AB Amsterdam
            </address>
          </li>
          <li className="text-white">02012345678</li>
          <li className="text-white">info@littlelemonrestaurant.com</li>
        </ul>
      </div>
      <div>
        <h3>Follow us on</h3>
        <SocialLinks />
      </div>
    </section>
  );
}

export default FooterNav;
