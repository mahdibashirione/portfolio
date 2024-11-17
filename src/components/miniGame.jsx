import { IoMdArrowDropup } from "react-icons/io";

function Screw({ className }) {
  return (
    <div
      className={`${className} absolute block rounded-full shadow shadow-black w-4 h-4 bg-gradient-to-tr from-blue-600/20 to-green-600/2`}
    >
      <span className="block -mt-1.5 m-[3px] text-lg text-gray-900 rotate-45">
        +
      </span>
    </div>
  );
}

const Minigame = () => {
  return (
    <article className="flex-1 z-10">
      <div className="relative p-6 grid gap-2 grid-cols-2 backdrop-blur-[2px] lg:w-[400px] rounded-lg w-[350px] lg:h-[400px] h-[350px]  bg-gradient-to-tr from-blue-600/25 to-green-600/25">
        <div className="col-span-1 bg-zinc-900 rounded-lg shadow-md relative">
          <button className="active:scale-90 duration-200 bg-secondary bottom-12 absolute right-1/2 translate-x-1/2 text-nowrap py-1 px-2 text-sm lg:text-base rounded-md">
            start-game
          </button>
        </div>
        <div className="col-span-1">
          {/* helep */}
          <div className="w-full p-4 text-gray-400 bg-zinc-900/40 rounded-lg text-[12px] lg:text-sm">
            <span className="block">// use keyboard</span>
            <span className="block">// arrow to play</span>
            {/* Arrows */}
            <span className="block rounded lg:w-11 w-9 h-6 bg-black mx-auto mb-1 mt-2">
              <IoMdArrowDropup className="text-lg mx-auto" />
            </span>
            <div className="flex gap-1">
              <span className="flex-1 block rounded h-6 bg-black">
                <IoMdArrowDropup className="text-lg mx-auto mt-0.5 -rotate-90" />
              </span>
              <span className="flex-1 block rounded h-6 bg-black">
                <IoMdArrowDropup className="text-lg mx-auto mt-0.5 rotate-180" />
              </span>
              <span className="flex-1 block rounded h-6 bg-black">
                <IoMdArrowDropup className="text-lg mx-auto mt-0.5 rotate-90" />
              </span>
            </div>
          </div>
          {/* foods view */}
          <div className="p-4">
            <span className="block text-gray-400 text-[12px] lg:text-sm">
              // arrow to play
            </span>
            <div className="flex gap-x-6 lg:gap-x-8 gap-y-3 mt-2 flex-wrap">
              {[1, 2, 3, 4, 5].map((food) => {
                return (
                  <span className="block w-2 h-2 bg-green-500 rounded-full shadow shadow-green-400"></span>
                );
              })}
              {[1, 2, 3].map((food) => {
                return (
                  <span className="block w-2 h-2 bg-green-500/20 rounded-full shadow shadow-green-400"></span>
                );
              })}
            </div>
          </div>
          {/* skip BTN */}
          <div className="flex-1 flex justify-end items-end">
            <button className="text-sm lg:text-base mt-12 lg:mt-24 duration-200 active:scale-90 border text-gray-400 py-1 px-3 rounded-lg border-gray-400">
              skip
            </button>
          </div>
        </div>
        <Screw className="top-2 left-2" />
        <Screw className="top-2 right-2" />
        <Screw className="bottom-2 left-2" />
        <Screw className="bottom-2 right-2" />
      </div>
    </article>
  );
};

export default Minigame;
