import React from "react";
import Reveal from "./Reveal";

const AboutMe = () => {
  return (
    <Reveal>
      <section id="about" className="scroll-mt-8">
        <h1 className="text-2xl font-bold text-left pb-6 pt-10 dark:text-gray-200">
          ABOUT ME
        </h1>
        <div className="lg:px-15 lg:text-lg p-8 md:p-10 border space-y-3 rounded-xl bg-gray-50 shadow-md hover:shadow-xl hover:transition dark:text-gray-200 dark:bg-slate-700 dark:border-slate-700">
          <p>
            I am a software developer with a background in computer engineering.
            My journey into the world of software development began after
            earning my{" "}
            <span className="text-purple-600 font-semibold dark:text-purple-300">
              Bachelors in Computer Engineering from San Jose State University
            </span>
            .
          </p>
          <p>
            Initially drawn to back-end web development and writing scripts with
            Python, I stumbled upon front-end development while working on{" "}
            <span className="hover:cursor-pointer underline">
              <a
                href="https://github.com/jechea14/Automated-RS-Clan-DXP-Competition"
                target="_blank"
              >
                web scrapers
              </a>
            </span>{" "}
            and{" "}
            <span className="hover:cursor-pointer underline">
              <a
                href="https://github.com/jechea14/django-inventory-api"
                target="_blank"
              >
                APIs
              </a>
            </span>{" "}
            . The idea of presenting data on webpages fascinated me, leading me
            to explore front-end technologies such as HTML, CSS, and JavaScript.
            As I delved deeper into this area, I discovered a true passion for
            front-end development. However, my initial love for backend
            development never faded. Now, I am passionate about both backend and
            frontend development, appreciating the unique challenges and rewards
            each brings to create dynamic and responsive web applications.
          </p>{" "}
          <p>
            Currently, I am actively seeking opportunities in junior/new grad
            frontend and/or backend development positions. I am eager to
            collaborate with seasoned professionals and further hone my skills.
            Embracing challenges, I find joy in coding and creatively solving
            problems with code. Though my primary interest lies in frontend and
            backend development, I am also open to exploring other roles such as
            Full stack development for the full combo, AI & Machine Learning,
            Data Analysis, and Test Engineering which can be applied from my
            Test Technician experience. I firmly believe that each opportunity
            presents a chance for growth and learning.
          </p>
        </div>
      </section>
    </Reveal>
  );
};

export default AboutMe;
