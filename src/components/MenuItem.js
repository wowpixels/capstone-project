function MenuItem() {
  return (
    <article className="bg-primary-200 rounded-t-3xl">
      <img
        className="w-full bg-primary rounded-t-3xl h-60 lg:h-80"
        src=""
        alt=""
      />
      <div className="p-8">
        <div className="flex justify-between items-center">
          <h4 className="serif">Title</h4>
          <p className="text-tertiary text-xl">$12.00</p>
        </div>
        <p className="text-primary py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
          atque eum fugiat tenetur doloribus, optio dicta a dolorem nisi
          aperiam pariatur odit necessitatibus debitis quod nihil eveniet
          ratione facilis eius.
        </p>
        <a href="#">Read more</a>
      </div>
    </article>
  );
}

export default MenuItem;
