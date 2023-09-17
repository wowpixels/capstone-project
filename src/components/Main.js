import Home from '../pages/home';
import Menu from '../pages/menu';
import Reservations from '../pages/reservations';
import OrderOnline from '../pages/order-online';
import Login from '../pages/login';
import { Routes, Route } from 'react-router-dom';

function main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/reservations" element={<Reservations />}></Route>
        <Route path="/order-online" element={<OrderOnline />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </main>
  );
}

export default main;
