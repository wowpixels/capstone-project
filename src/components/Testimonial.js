import StarRating from './StarRating';

function Testimonial(props) {
  const listTestimonial = props.data.map((data) => {
    return (
      <article
        key={data.id}
        className="testimonials bg-white rounded-3xl p-10 flex flex-col">
        <img className="rounded-full w-20 mb-4" src={data.image} alt="" />
        <div className="flex">
          <StarRating value={data.rating} />
          </div>
        <p className="py-4">{data.testimonial}</p>
        <p className="font-bold text-primary">- {data.name}</p>
      </article>
    );
  });

  return <>{listTestimonial}</>;
}

export default Testimonial;
