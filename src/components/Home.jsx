import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => (
  <div name="home" className="bg-home px-[1rem] md:px-[2rem] pb-[2rem] lg:pb-[6rem] mx-auto w-full">
    <div className="flex flex-col items-center justify-center pt-[9rem] md:pt-[7rem] mx-auto">
      <div className="flex flex-col gap-2 md:gap-4 lg:ml-5">
        <h1 className="text-2xl text-[#f8f9fad2] md:text-5xl lg:text-6xl font-bold mt-2 md:mt-10">
          Hello, I am
          {' '}
          <span className="bg-clip-text bg-gradient-to-b from-[#f94144] to-[#f3722c] text-transparent">Diana Beki</span>
        </h1>
        <h2 className="bg-clip-text bg-gradient-to-b from-[#f94144] to-[#f3722c] text-transparent text-2xl md:text-4xl font-bold">
          I am a Front End Developer
        </h2>
        <p className="md:text-[1.2rem] text-[#f8f9fad2] md:font-semibold">
          Experienced frontend developer
          dedicated to building performant,
          responsive, and accessible web applications.
        </p>
        <div className="">
          <Link to="contact" smooth duration={500} offset={-75} className="text-black text-[16px] md:font-bold w-fit px-2 py-1 md:px-6 md:py-3 md:my-2 flex gap-1 md:gap-2 items-center rounded-md bg-gradient-to-b from-[#f94144] to-[#f3722c] md:transition-transform md:transform md:hover:scale-110 hover:shadow-md hover:shadow-white md:duration-200 cursor-pointer">
            Contact
            <span className="hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
