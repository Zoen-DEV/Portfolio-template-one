import React from "react";
import Link from "next/link";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Nav = ({ setDarkMode, darkMode }) => {

  const handleTheme = (e) => {
    console.log(darkMode)
    window.localStorage.setItem('darkMode', !darkMode)
    setDarkMode(!darkMode)
  }

  return (
    <nav className="py-5 flex justify-between fixed w-screen pl-10 pr-10 z-10 bg-white shadow-lg dark:bg-gray-800 ">
      <h1 className="text-xl font-burtons md:text-3xl lg:text-4xl dark:text-gray-200 ">Richard Wave</h1>
      <ul className="flex items-center justify-between w-2/6">
        <li>
            <Link className="text-gray-800 font-bold tracking-widest hover:text-teal-600 dark:hover:text-teal-500 dark:text-gray-200" href='/'>HOME</Link>
        </li>
        <li>
            <Link className="text-gray-800 font-bold tracking-widest hover:text-teal-600 dark:hover:text-teal-500 dark:text-gray-200" href='#skills'>SKILLS</Link>
        </li>
        <li>
            <Link className="text-gray-800 font-bold tracking-widest hover:text-teal-600 dark:hover:text-teal-500 dark:text-gray-200" href='#projects'>PROJECTS</Link>
        </li>
        <li>
          {darkMode ? (
            <BsFillMoonStarsFill
              onClick={handleTheme}
              className="cursor-pointer text-2xl text-white"
            />
          ) : (
            <BsFillSunFill
              onClick={handleTheme}
              className="cursor-pointer text-2xl text-gray-800 "
            />
          )}
        </li>
        <li>
          <Link
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 "
            href="#home"
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
