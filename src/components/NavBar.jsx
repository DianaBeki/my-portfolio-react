import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home',
      style: 'hover:border-b-2 hover:border-white',
    },
    {
      id: 1,
      link: 'about',
      style: 'hover:border-b-2 hover:border-white',
    },
    {
      id: 2,
      link: 'portfolio',
      style: 'hover:border-b-2 hover:border-white',
    },
    {
      id: 3,
      link: 'experience',
      style: 'hover:border-b-2 hover:border-white',
    },
    {
      id: 4,
      link: 'contact',
      style: 'hover:border-b-2 hover:border-white',
    },
  ];

  const handleNavClick = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center w-full text-[#FFEBD8]  bg-[#0F0F0F] md:px-[7rem] h-20 fixed">
      <div>
        <h1 className="font-signature text-5xl">Diana</h1>
      </div>
      <ul className="hidden md:flex capitalize gap-[2rem] font-bold md:text-[16px] cursor-pointer">
        {links.map(({ id, link, style }) => (
          <li
            key={id}
            className={`${style} hover:text-[#E3651D] md:transition-transform md:transform md:hover:scale-110 md:duration-500`}
          >
            <Link to={link} smooth duration={500} offset={-75}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <button
        onClick={handleNavClick}
        onKeyDown={handleNavClick}
        type="button"
        tabIndex={0}
        className="md:hidden cursor-pointer pr-4 z-10 text-[#FFEBD8]"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      {nav && (
        <ul className="flex flex-col justify-center items-center uppercase gap-[2rem] font-medium cursor-pointer absolute top-0 left-0 w-full h-screen bg-[#E3651D]">
          {links.map(({ id, link }) => (
            <button
              key={id}
              onClick={handleNavClick}
              onKeyDown={handleNavClick}
              type="button"
              tabIndex={0}
              className="cursor-pointer uppercase px-10 py-3 text-2xl hover:text-[#1A1A1A] hover:rounded-[8px]"
            >
              <Link
                onClick={handleNavClick}
                to={link}
                smooth
                duration={500}
                offset={-75}
              >
                {link}
              </Link>
            </button>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
