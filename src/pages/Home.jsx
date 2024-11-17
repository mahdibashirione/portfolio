import { Link } from "react-router-dom";
import image from "../assets/3.jpg";
import Minigame from "../components/miniGame";

const HomePage = () => {
  return (
    <section className="z-20 flex flex-col md:flex-row gap-12 pt-[calc(2rem+58px)] pb-12 items-center container px-8">
      {/* title */}
      <div className="flex-1">
        <div className="flex justify-end">
          <div>
            <span className="xl:text-base text-sm text-gray-300">
              Hi all. I am
            </span>
            <h1 className="text-4xl text-white lg:text-6xl xl:text-7xl">
              Mahdi Bashiri
            </h1>
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
        </div>
      </div>
      {/* game */}
      <Minigame />
    </section>
  );
};

export default HomePage;
