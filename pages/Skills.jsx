import React from "react";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import Image from "next/image";

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen ml-28 mr-28">
      <div className="max-w-screen-lg mx-auto mt-20 pt-28 ">
        <h3 className="text-3xl py-1 font-bold dark:text-gray-100 ">
          Services I offer
        </h3>
        <p className="text-md py-2 leading-8 pl-2 text-gray-800 dark:text-gray-300 ">
          Since the beginning of my journey as a freelance designer, Ive done
          remote work for <span className="text-teal-500"> agencies </span>{" "}
          consulted for <span className="text-teal-500">startups</span> and
          collaborated with talented people to create digital products for both
          business and consumer use.
        </p>
        <p className="text-md py-2 leading-8 pl-2 text-gray-800 dark:text-gray-300 ">
          I offer from a wide range of services, including brand design, web
          design and teaching.
        </p>
      </div>
      <div className=" lg:flex gap-10 ">
        <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gray-800 dark:bg-gray-200 ">
          <Image src={design} width={100} height={100} alt="design logo" />
          <h3 className="text-lg font-medium pt-8 pb-2 text-gray-100 dark:text-gray-900 ">
            Beatiful Designs
          </h3>
          <p className="py-2 text-gray-300 dark:text-gray-600">
            Creating elegant design suited for your needs following core design
            theory.
          </p>
          <h4 className="py-4 text-teal-600">Design tools I use</h4>
          <p className="text-gray-200 py-1 dark:text-gray-800 ">Photoshop</p>
          <p className="text-gray-200 py-1 dark:text-gray-800 ">Ilustrator</p>
          <p className="text-gray-200 py-1 dark:text-gray-800 ">Figma</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gray-800 dark:bg-gray-200 ">
          <Image src={code} width={100} height={100} alt="code logo"  />
          <h3 className="text-lg font-medium pt-8 pb-2 text-gray-100 dark:text-gray-900 ">
            Beatiful Designs
          </h3>
          <p className="py-2 text-gray-300 dark:text-gray-600">
            Creating elegant design suited for your needs following core design
            theory.
          </p>
          <h4 className="py-4 text-teal-600">Design tools I use</h4>
          <p className="text-gray-200 py-1 dark:text-gray-800 ">Photoshop</p>
          <p className="text-gray-200 py-1 dark:text-gray-800 ">Ilustrator</p>
          <p className="text-gray-200 py-1 dark:text-gray-800 ">Figma</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gray-800 dark:bg-gray-200 ">
          <Image src={consulting} width={100} height={100} alt="consulting logo"  />
          <h3 className="text-lg font-medium pt-8 pb-2 text-gray-100 dark:text-gray-900 ">
            Beatiful Designs
          </h3>
          <p className="py-2 text-gray-300 dark:text-gray-600">
            Creating elegant design suited for your needs following core design
            theory.
          </p>
          <h4 className="py-4 text-teal-600">Design tools I use</h4>
          <p className="text-gray-200 py-1 dark:text-gray-800 ">Photoshop</p>
          <p className="text-gray-200 py-1 dark:text-gray-800 ">Ilustrator</p>
          <p className="text-gray-200 py-1 dark:text-gray-800 ">Figma</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
