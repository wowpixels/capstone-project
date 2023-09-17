function MenuItem(props) {
  const filteredName = props.data.map((dishes) => {
    return (
      <article
        key={dishes.id}
        className="bg-primary-200 rounded-t-3xl overflow-hidden">
        <img
          className="w-full object-cover rounded-t-3xl bg-primary rounded-t-3xl h-60 lg:h-80"
          src={dishes.image}
          alt={dishes.name}
        />
        <div className="p-8">
          <div className="flex justify-between items-center">
            <h4 className="serif">{dishes.name}</h4>
            <p className="text-tertiary text-xl">${dishes.price}</p>
          </div>
          <p className="text-primary py-4">{dishes.description}</p>
          <a href={dishes.url}>Read more</a>
        </div>
      </article>
    );
  });
  return <>{filteredName}</>;
}

export default MenuItem;
