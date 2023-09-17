import GreekSalad from '../images/greek_salad.jpg';
import Bruschetta from '../images/bruschetta.jpg';
import LemonDessert from '../images/lemon_dessert.jpg';

import MenuItem from './MenuItem';
const menuItem = [
  {
    image: GreekSalad,
    name: 'Greek Salad',
    price: 9.99,
    description:
      'Recusandae quia quia cumque dignissimos sint ut non velit et vitae unde maxime quo.',
    url: 'http://#',
  },
  {
    image: Bruschetta,
    name: 'Bruschetta',
    price: 12.0,
    description:
      'Iure neque rem eum officiis accusamus repellendus facilis molestiae consequatur quo adipisci.',
    url: 'http://#',
  },
  {
    image: LemonDessert,
    name: 'Lemon Dessert',
    price: 7.99,
    description:
      'Nihil molestiae magni quia dolor id ea amet deleniti ut aut est architecto.',
    url: 'http://#',
  },
];

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
        <MenuItem data={menuItem} />
      </div>
    </section>
  );
}

export default Highlights;
