import React from "react";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen ml-28 mr-28">
      <div className="max-w-screen-lg mx-auto mt-10 ">
        <h3 className="text-3xl py-1 pt-28 font-bold dark:text-gray-100">Portfolio</h3>
        <p className="text-md py-2 leading-8 pl-2 text-gray-800 dark:text-gray-200 ">
          Since the beginning of my journey as a freelance designer, Ive done
          remote work for <span className="text-teal-500"> agencies </span>{" "}
          consulted for <span className="text-teal-500">startups</span> and
          collaborated with talented people to create digital products for both
          business and consumer use.
        </p>
        <p className="text-md py-2 leading-8 pl-2 text-gray-800 dark:text-gray-200 ">
          I offer from a wide range of services, including brand design, web
          design and teaching.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap ">
        <div className="basis-1/3 flex-1">
          <Image
            src={web1}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            alt="project 1"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web2}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            alt="project 2"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web3}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            alt="project 3"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web4}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            alt="project 4"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web5}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            alt="project 5"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web6}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            alt="project 6"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
