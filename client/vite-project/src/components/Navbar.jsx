import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBlogger  } from 'react-icons/fa';
import {FaXmark , FaBarsStaggered} from 'react-icons/fa6'



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItem = [
    { link: 'Home', path: '/' },
    { link: 'About', path: '/About' },
    { link: 'Shop', path: '/Shop' },
    { link: 'Sell Your Book', path: '/admin/dashboard' },
    { link: 'Blog', path: '/Blog' }
  ];

  return (
    <div>
      <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 '>
        <nav className={`py-4 lg:px-24 px 4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
          <div className='flex justify-between items-center text-base gap-8'>
            {/*logo*/}
            <Link to="/" className='text-2l font-bold text-blue-700 flex item-center gap-2'>
              <FaBlogger className='inline-block' />
              Books
            </Link>

            {/* nav items for large dedice */}

            <ul className='md:flex space-x-12 hidden '>
              {navItem.map(({ link, path }) => (
                <li key={path}>
                  <Link to={path}
                  className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'
                  >{link}</Link>
                </li>
              ))}
            </ul>

            <div className='space-x-12 hidden lg:flex items-center'>
            <button  ><FaBarsStaggered className='w-5 hover:text-blue-700'/></button>
            </div>

            <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-black focus:outline-none'>
                {
                    isMenuOpen?<FaXmark className='h-5 w-5 text-black'  />:<FaBarsStaggered className='h-5 w-5 text-black'/>
                }
            </button>

            </div>
          </div>

          <div className={`space-y-4 px-4 mt-12 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0 ":"hidden"} `}>
            {
              navItem.map(({ link, path }) => (
                <li key={path}>
                  <Link to={path}
                  className='block text-base text-white uppercase cursor-pointer'
                  >{link}</Link>
                </li>
              ))
            }
            
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
