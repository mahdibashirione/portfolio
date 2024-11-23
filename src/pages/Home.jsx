import { Link } from "react-router-dom";
import Minigame from "../components/miniGame";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <section className="z-20 min-h-[calc(100vh-37px)] flex flex-col md:flex-row gap-12 pt-[calc(2rem+58px)] pb-12 items-center container px-8">
      {/* title */}
      <div className="flex-1 z-30">
        <div className="flex justify-end">
          <div>
            <motion.span
              transition={{ duration: 0.5 }}
              animate={{ scaleY: 1 }}
              initial={{ scaleY: 0 }}
              className="block xl:text-base text-sm text-gray-300"
            >
              Hi all. I am
            </motion.span>
            <motion.h1
              transition={{ duration: 0.5, delay: 0.5 }}
              animate={{ opacity: 100, translateX: 0 }}
              initial={{ opacity: 0, translateX: -100 }}
              className="text-4xl text-white lg:text-6xl xl:text-7xl"
            >
              Mahdi Bashiri
            </motion.h1>
            <motion.span
              transition={{ duration: 0.5, delay: 0.75 }}
              animate={{ scaleY: 1 }}
              initial={{ scaleY: 0 }}
              className="block text-lg text-primary xl:text-2xl"
            >
              {">"} Front-End Developer
            </motion.span>
            <div className="mt-12 text-sm md:text-base">
              <motion.p
                transition={{ duration: 0.5, delay: 1 }}
                animate={{ scaleY: 1 }}
                initial={{ scaleY: 0 }}
                className="text-sm text-gray-500"
              >
                // complete the game to continue
              </motion.p>
              <motion.p
                transition={{ duration: 0.5, delay: 1.25 }}
                animate={{ scaleY: 1 }}
                initial={{ scaleY: 0 }}
                className="text-sm text-gray-500 my-1"
              >
                // you can also see it on my Github page
              </motion.p>
              <div>
                <motion.span
                  transition={{ duration: 0.5, delay: 1.25 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  initial={{ opacity: 0, translateX: -100 }}
                  className="inline-block mr-2 text-primary"
                >
                  const
                </motion.span>
                <motion.span
                  transition={{ duration: 0.5, delay: 1.5 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  initial={{ opacity: 0, translateY: -100 }}
                  className="inline-block mr-2 text-green-600"
                >
                  githubLink
                </motion.span>
                <motion.span
                  transition={{ duration: 0.5, delay: 1.5 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  initial={{ opacity: 0, translateY: 100 }}
                  className="inline-block mr-2 text-white"
                >
                  =
                </motion.span>
                <motion.a
                  transition={{ duration: 0.3, delay: 1.5 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  initial={{ opacity: 0, translateX: 65 }}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-block text-secondary lg:hover:scale-105 lg:hover:ml-2 transition-all duration-200"
                  href="https://github.com/mahdibashirione"
                >
                  "github.com/mahdibashirione"
                </motion.a>
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
