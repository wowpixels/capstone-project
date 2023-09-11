import Nav from './Nav';
import SocialLinks from './SocialLinks';

function FooterNav() {
  return (
    <section className="py-20">
      <div>
        <h3 className="text-white">Navigation</h3>
        <Nav />
      </div>
      <div>
        <h3>Contact</h3>
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
