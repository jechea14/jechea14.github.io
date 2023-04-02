import React, { useContext } from "react";
import { ProjectContext } from "./Projects";

const Button = ({ name, link }) => {
  const id = useContext(ProjectContext);

  return (
    <div>
      {/* Project that is private */}
      {id === 4 ? (
        <div className="font-bold text-purple-600 hover:text-purple-800 hover:cursor-not-allowed transition dark:text-purple-300 dark:hover:text-purple-400">
          <button className="line-through hover:cursor-not-allowed">
            {name}
          </button>
          <span> Private</span>
        </div>
      ) : (
        <button className="underline underline-offset-4 font-bold text-purple-600 hover:text-purple-800 transition dark:text-purple-300 dark:hover:text-purple-400 ">
          <a href={link} target="_blank">
            {name}
          </a>
        </button>
      )}
    </div>
  );
};

export default Button;
