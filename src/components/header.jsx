import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const handleOpenSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  return (
    <>
      <header className="fixed top-0 z-50 backdrop-blur-sm w-full border-b-[1px] border-gray-700 text-gray-500">
        <div className="flex relative container">
          <span className="p-4 md:pr-16 border-gray-700 md:border-r-[1px]">
            mahdi-bashiri
          </span>
          <div className="flex-1 hidden md:block">
            <ul className="flex justify-start text-center">
              <li
                className={`border-b-2 ${
                  pathname === "/"
                    ? "border-secondary text-secondary"
                    : "border-transparent"
                } cursor-pointer hover:bg-gray-500/15 duration-200`}
              >
                <NavLink className="block p-4" to="/">
                  _hello
                </NavLink>
              </li>
              <li
                className={`border-b-2 ${
                  pathname === "/about-me"
                    ? "border-secondary text-secondary"
                    : "border-transparent"
                } border-x-[1px] border-x-gray-600 cursor-pointer hover:bg-gray-500/15 duration-200`}
              >
                <NavLink className="block p-4" to="/about-me">
                  _about-me
                </NavLink>
              </li>
              <li
                className={`border-b-2 ${
                  pathname === "/projects"
                    ? "border-secondary text-secondary"
                    : "border-transparent"
                } border-r-[1px] border-r-gray-600 cursor-pointer hover:bg-gray-500/15 duration-200`}
              >
                <NavLink className="block p-4" to="/projects">
                  _projects
                </NavLink>
              </li>
            </ul>
          </div>
          <span className="hidden md:block p-4 hover:bg-gray-500/15 cursor-pointer border-gray-700 border-l-[1px]">
            _contact-me
          </span>
          {/* sidebar */}
          <div className="md:hidden flex flex-1 items-center justify-end">
            <button
              onClick={handleOpenSidebar}
              className="active:scale-90 duration-300 flex flex-col justify-center p-4 gap-2"
            >
              <span
                className={`${
                  isOpenSidebar && "rotate-45 translate-y-2.5"
                } duration-300 w-6 h-[2px] block bg-gray-500`}
              ></span>
              <span
                className={`${
                  isOpenSidebar && "opacity-0"
                } duration-300 w-6 h-[2px] block bg-gray-500`}
              ></span>
              <span
                className={`${
                  isOpenSidebar && "-rotate-45 -translate-y-2.5"
                } duration-300 w-6 h-[2px] block bg-gray-500`}
              ></span>
            </button>
          </div>
          <nav
            className={`${
              isOpenSidebar ? "max-h-screen" : "max-h-0"
            } overflow-hidden md:hidden fixed w-screen top-full duration-300 z-10 h-screen bg-background border-l border-gray-600`}
          >
            <ul className="flex flex-col text-center">
              <li
                className={`border-b-2 ${
                  pathname === "/"
                    ? "border-secondary text-secondary"
                    : "border-transparent"
                } cursor-pointer hover:bg-gray-500/15 duration-200`}
              >
                <NavLink
                  onClick={handleOpenSidebar}
                  className="block p-4"
                  to="/"
                >
                  _hello
                </NavLink>
              </li>
              <li
                className={`border-b-2 ${
                  pathname === "/about-me"
                    ? "border-secondary text-secondary"
                    : "border-transparent"
                } cursor-pointer hover:bg-gray-500/15 duration-200`}
              >
                <NavLink
                  onClick={handleOpenSidebar}
                  className="block p-4"
                  to="/about-me"
                >
                  _about-me
                </NavLink>
              </li>
              <li
                className={`border-b-2 ${
                  pathname === "/projects"
                    ? "border-secondary text-secondary"
                    : "border-transparent"
                } 0 cursor-pointer hover:bg-gray-500/15 duration-200`}
              >
                <NavLink
                  onClick={handleOpenSidebar}
                  className="block p-4"
                  to="/projects"
                >
                  _projects
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
