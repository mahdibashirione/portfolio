import { filter } from "framer-motion/client";
import { useEffect, useState } from "react";
import { FaCheck, FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";

function ProjectCard() {
  return (
    <div className="col-span-1 px-6">
      {/* title */}
      <div className="max-w-[300px] lg:max-w-full w-full mx-auto">
        <span className="font-bold flex items-center gap-x-1 text-primary mb-2">
          Project 1{" "}
          <p className="text-[12px] md:text-sm text-gray-500">
            // _ui-animations
          </p>
        </span>
      </div>
      {/* image and detail */}
      <div className="max-w-[300px] lg:max-w-full w-full shadow-lg overflow-hidden bg-[#000F1E] rounded-xl border-[1px] border-gray-800 mx-auto">
        <div className="h-32 object-cover">
          <img className="w-full h-full" src="/public/3.jpg" alt="" />
        </div>
        <div className="p-4 border-t-[1px] border-gray-700">
          <p className="text-[12px] md:text-sm text-gray-500 line-clamp-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            velit sunt totam repudiandae explicabo cupiditate! Iure sed a
            dignissimos incidunt consectetur porro, earum velit fuga quo vero
            alias pariatur tempora?
          </p>
        </div>
        <div className="pl-4 pb-5">
          <Link
            className="bg-[#182837] duration-200 hover:bg-secondary hover:text-black rounded-lg text-white text-[12px] md:text-sm py-2 px-4"
            to="/projects"
          >
            view-project
          </Link>
          <Link
            className="bg-[#182837] duration-200 hover:bg-secondary hover:text-black ml-2 rounded-lg text-white text-[12px] md:text-sm py-2 px-4"
            to="/projects"
          >
            surce
          </Link>
        </div>
      </div>
    </div>
  );
}

function FilterItem({ handleClick, state, icon, title }) {
  const [isUsed, setIsUsed] = useState(false);

  useEffect(() => {
    const isFilter = state.findIndex(
      (filterUsed) => filterUsed.title === title
    );

    isFilter >= 0 ? setIsUsed(true) : setIsUsed(false);
  }, [state]);

  return (
    <button
      onClick={handleClick}
      className={`${
        isUsed
          ? "bg-secondary md:bg-transparent text-white md:text-gray-200"
          : "text-gray-600"
      } rounded-lg p-2 text-lg flex items-center`}
    >
      <div
        className={`${
          isUsed ? "bg-secondary border-secondary" : "border-gray-500"
        } w-4 h-4 rounded border mr-2 hidden md:flex items-center justify-center`}
      >
        <FaCheck
          className={`${isUsed ? "block" : "hidden"} text-[12px] text-white`}
        />
      </div>
      {icon}
      <span className="ml-1">{title}</span>
    </button>
  );
}

const Projects = () => {
  const [filterUsed, setFilterUsed] = useState([]);
  const filtersList = [
    { id: 1, title: "React", icon: <FaReact /> },
    { id: 2, title: "Html", icon: <FaHtml5 /> },
    { id: 3, title: "Css", icon: <FaCss3 /> },
    { id: 4, title: "Tailwind", icon: <SiTailwindcss /> },
    { id: 5, title: "NectJs", icon: <RiNextjsFill /> },
  ];

  const handleFilterClick = (props) => {
    filterUsed.length <= 0 && setFilterUsed([...filterUsed, props]);
    const isFilter = filterUsed.findIndex(
      (filter) => filter.title === props.title
    );

    if (isFilter >= 0) {
      const finalFilters = filterUsed.filter(
        (filter) => filter.title !== props.title
      );
      setFilterUsed(finalFilters);
    } else {
      setFilterUsed([...filterUsed, props]);
    }
  };

  return (
    <section className="container md:grid grid-cols-[200px_1fr] min-h-[calc(100vh-37px)] px-4 pt-[calc(58px)]">
      {/* Filter */}
      <div className="md:col-span-1 xl md:border-r border-gray-600">
        <div className="md:flex-col md:sticky top-16 md:border-b-0 overflow-x-scroll no-scrollbar gap-2 flex col-span-1 py-2 border-gray-600 border-b mb-6">
          {filtersList.map((filter) => (
            <FilterItem
              key={filter.id}
              handleClick={() => handleFilterClick(filter)}
              state={filterUsed}
              {...filter}
            />
          ))}
        </div>
      </div>
      {/* Project List */}
      <div className="col-span-1 grid grid-cols-1 gap-y-8 py-6 content-start lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7].map((project, i) => {
          return <ProjectCard key={i} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
