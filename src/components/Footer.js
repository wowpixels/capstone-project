import Copyright from './Copyright';
import FooterNav from './FooterNav';

function footer() {
  return (
    <footer>
      <div className="bg-black">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <img src="" alt="" />
            </div>
            <FooterNav />
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
}

export default footer;
