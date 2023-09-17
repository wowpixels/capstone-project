import restaurant from '../images/restaurant.jpg';
import marioAdrian from '../images/restaurant chef B.jpg';

function About() {
  return (
    <section className="container py-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <h2 className="serif text-primary -mb-2">Little Lemon</h2>
          <h3 className="serif">Chicago</h3>
          <p className="pt-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            soluta sunt quae praesentium fugit cupiditate aperiam iste non
            consectetur, architecto voluptas quod beatae enim quo nihil
            explicabo, at numquam voluptatum.
          </p>
        </div>
        <div className="relative flex">
          <div className="w-72 h-96">
            <img
              className="w-72 h-96 object-cover rounded-xl"
              src={restaurant}
              alt="Restaurant"
            />
          </div>
          <div className="w-72 h-96 -ml-20 mt-20">
            <img
              className="w-72 h-96 object-cover rounded-xl"
              src={marioAdrian}
              alt="Owners"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
