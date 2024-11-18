import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <div className="col-span-1">
      {/* title */}
      <div className="max-w-[300px] mx-auto">
        <span className="font-bold flex items-center gap-x-1 text-primary mb-2">
          Project 1{" "}
          <p className="text-[12px] md:text-sm text-gray-500">
            // _ui-animations
          </p>
        </span>
      </div>
      {/* image and detail */}
      <div className="max-w-[300px] shadow-lg overflow-hidden bg-[#000F1E] rounded-xl border-[1px] border-gray-800 mx-auto">
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

const Projects = () => {
  return (
    <section className="container min-h-[calc(100vh-37px)] px-4 pt-[calc(58px+2rem)]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pb-16">
        {[1, 2, 3, 4, 5, 6, 7].map((product) => {
          return <ProductCard />;
        })}
      </div>
    </section>
  );
};

export default Projects;
