import Bookstore from '../assets/portfolio/Bookstore.png';
import Spacehub from '../assets/portfolio/Spacehub.png';
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
      src: Spacehub,
      description: 'Space Travelers’ Hub is a dynamic single-page web app connecting users to comprehensive rocket and mission data from SpaceX',
      technologies: ['React', 'Redux', 'Rest API'],
      seelive: 'https://space-travelers-three.vercel.app/',
      seesource: 'https://github.com/DianaBeki/space-travelers-hub',
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
    <div name="portfolio" className="bg-[#001219] w-full pt-[3rem] pb-[5rem]">
      <div className="">
        <div className="text-[#f3722cf3] pb-5 md:pb-[5rem] text-center">
          <h2 className="text-2xl md:text-5xl font-bold md:inline md:border-b-4 border-white">My Recent Projects</h2>
        </div>

        <div className="px-5">
          <div className="flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolios.map(
              ({
                id, src, description, technologies, seelive, seesource,
              }) => (
                <div
                  key={id}
                  className="shadow-lg shadow-black rounded-lg bg-white lg:duration-500 lg:hover:scale-105 cursor-pointer w-full min-h-[300px]"
                >
                  <img src={src} alt="projects" className="rounded-md md:pb-3" />
                  <div className="flex flex-col items-center justify-center gap-6">
                    <p className="text-[#001219] text-1xl text-center font-[500]">{description}</p>
                    <div className="">
                      {technologies.map((tech, index) => (
                        <span
                          key={index} // eslint-disable-line react/no-array-index-key
                          className="border-2 border-[#001219] md:text-[14px] bg-clip-text bg-gradient-to-r from-[#001219] to-[#f3722c] text-transparent p-2 m-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="text-[#000000] text-[1.1rem] flex gap-10 pb-5">
                      <button
                        type="button"
                        onClick={() => handleSeeLiveClick(seelive)}
                        className={`border-2 border-white px-2 py-1 text-[#f8f9fad2] md:px-4 md:py-2 bg-gradient-to-r from-[#001219] to-[#f3722c] hover:bg-[#001219ee] rounded-md duration-500 hover:scale-110 ${
                          !seelive && 'opacity-50 cursor-not-allowed'
                        }`}
                        disabled={!seelive}
                      >
                        See live
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSeeSourceClick(seesource)}
                        className={`border-2 border-white px-2 py-1 md:px-4 md:py-2 bg-gradient-to-r from-[#001219] to-[#f3722c] hover:bg-[#001219ee] rounded-lg duration-500 hover:scale-110 text-[#f8f9fad2] font-size ${
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
