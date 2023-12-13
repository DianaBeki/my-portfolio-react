import React, { useState, useEffect } from 'react';
import Bookstore from '../assets/portfolio/Bookstore.png';
import Budget from '../assets/portfolio/budget.png';
import Fashion from '../assets/portfolio/Fashion.png';
import Mathmagician from '../assets/portfolio/Mathmagician.png';
import Meal from '../assets/portfolio/meal.png';
import Todolist from '../assets/portfolio/Todolist.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Bookstore,
      description: 'The Bookstore is a React and Redux website that allows users to add a book to the list displays list of books remove a book from the list.',
      technologies: ['React', 'Redux', 'API'],
      seelive: 'https://bookstore-f5ng.onrender.com',
      seesource: 'https://github.com/DianaBeki/bookstore',
    },
    {
      id: 2,
      src: Budget,
      description: 'Budget app a fully functional site for comprehensive management, tracking payments, and categorizing expenses. Users can monitor spendings',
      technologies: ['Rails', 'PostgreSQL', 'Rspec'],
      seelive: 'https://expenses-app-584x.onrender.com',
      seesource: 'https://github.com/DianaBeki/budget-app',
    },
    {
      id: 3,
      src: Fashion,
      description: 'A fashion week is a Web App bringing together fashion designers, brands, and houses, showcasing their latest collections through mesmerizing runway shows',
      technologies: ['Javascript', 'HTML', 'CSS'],
      seelive: 'https://dianabeki.github.io/Fashion-week/',
      seesource: 'https://github.com/DianaBeki/Fashion-week',
    },
    {
      id: 4,
      src: Mathmagician,
      description: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
      technologies: ['Reactjs', 'sass', 'HTML', 'CSS'],
      seelive: 'https://mathmagicians-4bmj.onrender.com',
      seesource: 'https://github.com/DianaBeki/math-magicians',
    },
    {
      id: 5,
      src: Meal,
      description: 'The Meal app connects to TheMeal DB API to help users discover various recipes. By smartly organizing information and using technology, the app makes it easy for users to explore and enjoy different meals',
      technologies: ['ReactJS', 'Redux', 'CSS'],
      seelive: 'https://unrivaled-khapse-e0bd48.netlify.app/',
      seesource: 'https://github.com/DianaBeki/meal_point',
    },
    {
      id: 6,
      src: Todolist,
      description: 'The TodoList app is a powerful task management tool designed to enhance productivity and organization.Provides users with a streamlined interface to create, organize, and prioritize tasks efficiently.',
      technologies: ['Webpack', 'Javascript', 'CSS'],
      seelive: 'https://dianabeki.github.io/To-Do-list/dist/',
      seesource: 'https://github.com/DianaBeki/To-Do-list',
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPageSmallScreen = 1;
  const itemsPerPageMediumScreen = 2;

  const getItemsPerPage = () => (window.innerWidth >= 768
    ? itemsPerPageMediumScreen : itemsPerPageSmallScreen);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - getItemsPerPage());
    }
  };

  const handleNext = () => {
    if (startIndex + getItemsPerPage() < portfolios.length) {
      setStartIndex(startIndex + getItemsPerPage());
    }
  };

  const paginatedportfolios = portfolios.slice(startIndex, startIndex + getItemsPerPage());

  useEffect(() => {
    const handleResize = () => {
      setStartIndex(0);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSeeLiveClick = (liveLink) => {
    if (liveLink) {
      window.open(liveLink, '_blank');
    }
  };

  const handleSeeSourceClick = (sourceLink) => {
    if (sourceLink) {
      window.open(sourceLink, '_blank');
    }
  };

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 text-white w-full pb-[5rem]">
      <div className="">
        <div className="pb-5 md:pb-[5rem] text-center">
          <p className="text-2xl md:text-5xl bg-clip-text bg-gradient-to-b from-[#B6FFFA] to-[#FF6C22] text-transparent font-bold md:inline md:border-b-4 md:border-white">My Recent Projects</p>
        </div>

        <div className="mx-auto md:mx-10">
          <div className="flex justify-center items-center gap-[1.2rem]">
            <div className="">
              <button
                type="button"
                onClick={handlePrev}
                disabled={startIndex === 0}
                className="next-btn bg-black text-[#EEE7DA] text-[1rem] disabled:bg-lime-200 disabled:text-black border-2 rounded-[50%] px-4 py-2"
              >
                &lt;
              </button>
            </div>
            {paginatedportfolios.map(
              ({
                id, src, description, technologies, seelive, seesource,
              }) => (
                <div
                  key={id}
                  className="shadow-md shadow-[#FFFFDD] rounded-lg lg:duration-500 lg:hover:scale-95 cursor-pointer"
                >
                  <img src={src} alt="Project screenshots" className="rounded-md md:pb-3" />
                  <div className="flex flex-col items-center justify-center gap-4">
                    <p className="text-1xl">{description}</p>
                    <div className="flex gap-4">
                      {technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-white md:text-[14px] text-black p-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="text-gray-800 flex gap-10 pb-5">
                      <button
                        type="button"
                        onClick={() => handleSeeLiveClick(seelive)}
                        className={`border-2 border-[#FFF5C2] px-2 py-1 md:px-4 md:py-2  bg-gradient-to-r from-[#A9B388] to-[#B99470] rounded-md duration-500 hover:scale-110 ${
                          !seelive && 'opacity-50 cursor-not-allowed'
                        }`}
                        disabled={!seelive}
                      >
                        See live
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSeeSourceClick(seesource)}
                        className={`border-2 border-[#FFF5C2] px-2 py-1 md:px-4 md:py-2 bg-gradient-to-r from-[#A9B388] to-[#B99470] rounded-md duration-500 hover:scale-110 font-size ${
                          !seesource && 'opacity-50 cursor-not-allowed'
                        }`}
                        disabled={!seesource}
                      >
                        See source
                      </button>
                    </div>
                  </div>
                </div>
              ),
            )}
            <div>
              <button
                type="button"
                onClick={handleNext}
                disabled={startIndex + getItemsPerPage() >= portfolios.length}
                className="next-btn bg-black text-[#EEE7DA] text-[1rem] disabled:bg-lime-200 disabled:text-black border-2 rounded-[50%] px-4 py-2"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
