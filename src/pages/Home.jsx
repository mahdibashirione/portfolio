import { Link } from "react-router-dom";
import image from "../assets/3.jpg";

const HomePage = () => {
  return (
    <section className="flex flex-col md:flex-row gap-y-12 pt-12 items-center container px-8">
      {/* title */}
      <div className="flex-1">
        <span className="xl:text-base text-sm text-gray-300">Hi all. I am</span>
        <h1 className="text-4xl text-white xl:text-6xl">Mahdi Bashiri</h1>
        <span className="text-lg text-primary xl:text-2xl">
          {">"} Front-End Developer
        </span>
        <div className="mt-12 text-sm md:text-base">
          <p className="text-sm text-gray-500">
            // complete the game to continue
          </p>
          <p className="text-sm text-gray-500 my-1">
            // you can also see it on my Github page
          </p>
          <div>
            <span className="mr-2 text-primary">const</span>
            <span className="mr-2 text-green-600">githubLink</span>
            <span className="mr-2 text-white">=</span>
            <Link
              className="inline-block text-secondary lg:hover:scale-105 lg:hover:ml-2 transition-all duration-200"
              to=""
            >
              "github.com/mahdibashirione"
            </Link>
          </div>
        </div>
      </div>
      {/* game */}
      <div className="flex-1 flex justify-end">
        <div className="lg:w-[400px] md:w-[350px] lg:h-[400px] md:h-[350px] w-[300px] h-[300px] rounded bg-secondary"></div>
      </div>
    </section>
  );
};

export default HomePage;
