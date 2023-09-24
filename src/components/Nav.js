import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import { useState } from 'react';
import { ReactComponent as HamburgerMenu } from '../images/hamburger menu.svg';


function Nav() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
    console.log('clicked')
  }

  return (
    <>
      <nav>
        <div className='hidden gap-4 justify-center items-center sm:gap-8 lg:gap-16 md:flex'>
          <NavLinks />
        </div>
        <div className='flex md:hidden'>
          <span className='font-bold hover:cursor-pointer'
          onClick={toggleMobileNav}
          ><HamburgerMenu /></span>
          <div className={mobileNav ? 'flex' : 'hidden'}>
            <div className='absolute z-10 w-full h-full bg-secondary top-0 left-0 bottom-0'>
              <span className='absolute right-5 top-5 font-bold hover:cursor-pointer'
              onClick={toggleMobileNav}
              >CLOSE</span>
              <div className='flex flex-col w-full h-full justify-center items-center gap-4'>
                <NavLink className='text-4xl' onClick={toggleMobileNav} to="/">Home</NavLink>
                <NavLink className='text-4xl' onClick={toggleMobileNav} to="/menu">Menu</NavLink>
                <NavLink className='text-4xl' onClick={toggleMobileNav} to="/reservations">Reservations</NavLink>
                <NavLink className='text-4xl' onClick={toggleMobileNav} to="/order-online">Order Online</NavLink>
                <NavLink className='text-4xl' onClick={toggleMobileNav} to="/login">Login</NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
