import React, { useContext } from "react";

const Button = ({ name, link }) => {
  return (
    <div>
      <button className="underline underline-offset-4 font-bold text-purple-600 hover:text-purple-800 transition dark:text-purple-300 dark:hover:text-purple-400 ">
        <a href={link} target="_blank">
          {name}
        </a>
      </button>
    </div>
  );
};

export default Button;
