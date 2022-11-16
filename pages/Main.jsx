import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";

const Main = () => {
  return (
    <section id="main" className="min-h-screen ml-20 mr-20">
      <div className="text-center p-10 ">
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 ">
          <Image src={deved} layout='fill' objectFit="cover" alt="main logo"  />
        </div>
        <h2 className="text-5xl py-2 text-teal-600 mt-20 font-medium md:text-6xl drop-shadow-lg ">
          Richard Wave
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-200 ">
          UX/UI Designer.
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400 ">
          Freelancer providing services for design content needs. Join me below
          and lets get cracking!
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-200 ">
        <a
          href="http://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-600 hover:scale-125 transition-all "
        >
          <AiFillTwitterCircle />
        </a>
        <a
          href="http://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-600 hover:scale-125 transition-all "
        >
          <AiFillLinkedin />
        </a>
        <a
          href="http://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-600 hover:scale-125 transition-all "
        >
          <AiFillYoutube />
        </a>
      </div>
    </section>
  );
};

export default Main;
