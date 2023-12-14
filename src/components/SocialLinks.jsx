import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn
          {' '}
          <FaLinkedin size={30} />
        </>
      ),
      to: 'https://www.linkedin.com/in/diana-beki/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          Github
          {' '}
          <FaGithub size={30} />
        </>
      ),
      to: 'https://github.com/DianaBeki',
    },
    {
      id: 3,
      child: (
        <>
          Mail
          {' '}
          <HiOutlineMail size={30} />
        </>
      ),
      to: 'mailto:dianabeki54@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume
          {' '}
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      to: '/resume.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({
          id, child, to, style, download,
        }) => (
          <li key={id} className={`${style} flex justify-between items-center w-40 h-14 px-4 bg-white ml-[-100px] hover:ml-[10px] hover:rounded-md duration-300`}>
            <Link
              to={to}
              className="flex justify-between items-center w-full text-[#F39F5A]"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
