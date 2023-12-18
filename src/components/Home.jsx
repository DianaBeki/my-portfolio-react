import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => (
  <div name="home" className="bg-img px-[1rem] md:px-[2rem] pb-[2rem] lg:pb-[8rem] mx-auto">
    <div className="flex flex-col items-center justify-center pt-[9rem] md:pt-[7rem] mx-auto">
      <div className="flex flex-col gap-2 md:gap-4">
        <h1 className="text-2xl text-[#E3651D] md:text-3xl lg:text-6xl font-bold mt-2 md:mt-10">
          Hello, I am
          {' '}
          <span className="text-[#040D12]">Diana Beki</span>
        </h1>
        <h2 className="text-2xl md:text-4xl text-[#E3651D] font-bold">
          I am a Front End Developer
        </h2>
        <p className="text-[1.2rem] text-[#191919] font-[400]">
          Experienced frontend developer
          dedicated to building performant,
          responsive, and accessible web applications.
        </p>
        <div className="">
          <Link to="contact" smooth duration={500} offset={-75} className="text-white text-[16px] md:font-bold w-fit px-2 md:px-6 py-3 md:my-2 flex gap-1 md:gap-2 items-center rounded-md bg-[#E3651D] hover:bg-[#191919]  md:transition-transform md:transform md:hover:scale-110 hover:shadow-md hover:shadow-white md:duration-200 cursor-pointer">
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
