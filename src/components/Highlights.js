import MenuItem from './MenuItem';

function Highlights() {
  return (
    <section className="container pt-32 pb-16">
      <div className="flex justify-between items-center">
        <h2 className="serif">This weeks special</h2>
        <a className="btn" href="/online-menu" role="button">
          Online Menu
        </a>
      </div>
      <div className="grid grid-cols-1 gap-10 mt-4 lg:grid-cols-3 ">
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}

export default Highlights;
