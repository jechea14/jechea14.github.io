import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import self_image from "../images/self_image.jpg";

const Intro = () => {
  return (
    <section
      id="home"
      className="md:flex md:flex-row-reverse md:justify-around mb-20 lg:justify-center scroll-mt-20 dark:text-gray-200 md:space-x-2"
    >
      {/* picture */}
      <picture className="flex justify-center mt-4">
        <img
          src={self_image}
          alt="self"
          loading="lazy"
          className="rounded-full w-72 md:w-auto h-auto max-w-md md:max-h-72"
        />
      </picture>

      {/* description */}
      <div className="flex flex-col text-center md:text-left md:justify-end">
        <div>
          <h1 className="font-bold mt-4 text-5xl leading-loose md:leading-none">
            Hi! I'm{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
              Jeanie
            </span>
            .
          </h1>
          <p className="text-center font-medium md:text-left md:mt-4 md:max-w-sm">
            A Computer Engineer based in California, USA with a passion in
            software development.
          </p>
        </div>

        {/* social media icons and links */}
        <div className="flex justify-between mt-10">
          <button className="bg-purple-600 hover:bg-purple-800 text-gray-100 py-1 px-5 rounded transition dark:hover:text-purple-700 dark:hover:bg-gray-200">
            <a
              href={`#projects`}
              className="text-md lg:text-xl capitalize hover:cursor-pointer  "
            >
              Explore My Work
            </a>
          </button>
          <button>
            <a
              href="https://www.linkedin.com/in/jeanie-chea-765055151/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={40} color={"blue"} />
            </a>
          </button>
          <button>
            <a
              href="https://github.com/jechea14"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare size={40} />
            </a>
          </button>
          <button>
            <a
              href="mailto:chea.jeanie@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FiMail size={40} />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
