import Testimonial from './Testimonial';

function Testimonials() {
  return (
    <section className="bg-primary-200 py-20">
      <div className="container">
        <h2 className="text-center mb-8 serif text-primary">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
