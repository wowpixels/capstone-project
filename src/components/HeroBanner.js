function HeroBanner() {
  return (
    <section className="bg-primary">
      <div className="container grid grid-cols-1 gap-8 py-16 md:grid-cols-2">
        <div>
          <h1 className="text-secondary text-6xl serif -mb-4">
            Little Lemon
          </h1>
          <h3 className="text-white text-3xl m-0 serif">Chicago</h3>
          <p className="text-white py-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Itaque architecto repellat accusantium quam recusandae nihil
            illo voluptates assumenda dolores a voluptatum soluta dolorem
            possimus esse modi, quos aperiam libero magni!
          </p>
          <a className="btn" href="/book" role="button">
            Book a table
          </a>
        </div>
        <div className="relative">
          <img
            className="absolute bg-tertiary rounded-xl right-0 -bottom-24 md:bottom-auto w-40 h-40 md:w-80 md:h-96"
            src=""
            alt="Restaurant"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
