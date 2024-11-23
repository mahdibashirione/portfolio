import { Link } from "react-router-dom";
import Minigame from "../components/miniGame";
import { motion } from "framer-motion";

const HomePage = () => {
  // animate container
  const variantsContainer = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };
  // animate items
  const variantsItems = {
    hidden: { translateY: 50, opacity: 0 },
    visible: {
      translateY: 5,
      opacity: 1,
    },
  };

  return (
    <section className="z-20 min-h-[calc(100vh-37px)] flex flex-col md:flex-row gap-12 pt-[calc(2rem+58px)] pb-12 items-center container px-8">
      {/* title */}
      <div className="flex-1 z-30">
        <div className="flex justify-end">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variantsContainer}
          >
            <motion.span
              variants={variantsItems}
              className="block xl:text-base text-sm text-gray-300"
            >
              Hi all. I am
            </motion.span>
            <motion.h1
              variants={variantsItems}
              className="text-4xl text-white lg:text-6xl xl:text-7xl"
            >
              Mahdi Bashiri
            </motion.h1>
            <motion.span
              variants={variantsItems}
              className="block text-lg text-primary xl:text-2xl"
            >
              {">"} Front-End Developer
            </motion.span>
            <div className="mt-12 text-sm md:text-base">
              <motion.p
                variants={variantsItems}
                className="text-sm text-gray-500"
              >
                // complete the game to continue
              </motion.p>
              <motion.p
                variants={variantsItems}
                className="text-sm text-gray-500 my-1"
              >
                // you can also see it on my Github page
              </motion.p>
              <div>
                <motion.span
                  variants={variantsItems}
                  className="inline-block mr-2 text-primary"
                >
                  const
                </motion.span>
                <motion.span
                  variants={variantsItems}
                  className="inline-block mr-2 text-green-600"
                >
                  githubLink
                </motion.span>
                <motion.span
                  variants={variantsItems}
                  className="inline-block mr-2 text-white"
                >
                  =
                </motion.span>
                <motion.a
                  variants={variantsItems}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-block text-secondary"
                  href="https://github.com/mahdibashirione"
                >
                  "github.com/mahdibashirione"
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* game */}
      <Minigame />
    </section>
  );
};

export default HomePage;
