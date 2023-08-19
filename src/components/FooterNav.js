import Nav from './Nav';
import SocialLinks from './SocialLinks';

function FooterNav() {
  return (
    <section>
      <div>
        <h3>Navigation</h3>
        <Nav />
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
          <li>
            <address>Street 100, 1234AB Amsterdam</address>
          </li>
          <li>02012345678</li>
          <li>info@littlelemonrestaurant.com</li>
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
