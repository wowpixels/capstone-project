import Testimonial from './Testimonial';

function Testimonials() {
  const testimonialData = [
    {
      name: 'John Doe',
      testimonial:
        'Consequatur aut vitae deleniti eligendi quidem sed doloribus quia delectus repudiandae voluptas repellendus et expedita ipsum.',
      image: 'https://randomuser.me/api/portraits/men/23.jpg',
      rating: '3',
    },
    {
      name: 'Mark Smith',
      testimonial:
        'Excepturi alias est omnis assumenda et eos quia veniam doloribus quisquam ipsa temporibus a ipsum.',
      image: 'https://randomuser.me/api/portraits/men/99.jpg',
      rating: '5',
    },
    {
      name: 'Jean Blake',
      testimonial: 'Sed est in sit.',
      image: 'https://randomuser.me/api/portraits/women/60.jpg',
      rating: '4',
    },
    {
      name: 'Olivia Pippin',
      testimonial:
        'Iusto quo corrupti cumque et ut iusto saepe. Eos consectetur ut praesentium eos ratione nihil ipsum cum placeat quo qui.',
      image: 'https://randomuser.me/api/portraits/women/24.jpg',
      rating: '5',
    },
  ];

  return (
    <section className="bg-primary-200 py-20">
      <div className="container">
        <h2 className="text-center mb-8 serif text-primary">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          <Testimonial data={testimonialData} />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
