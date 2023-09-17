import HeroBanner from '../components/HeroBanner.js';
import Highlights from '../components/Highlights';
import About from '../components/About';
import Testimonials from '../components/Testimonials';

function Home() {
  return (
    <>
      <HeroBanner />
      <Highlights />
      <Testimonials />
      <About />
    </>
  );
}
export default Home;
