import React from "react";
import Button from "./Button";

const ProjectCard = ({
  title,
  techUsed,
  description,
  image,
  linkDemo,
  linkCode,
}) => {
  return (
    <div className="flex flex-col justify-between rounded-xl text-center bg-gray-50 shadow-md hover:shadow-xl hover:transition dark:bg-slate-700 dark:border-slate-700 lg:flex-row">
      {/* project picture */}
      <div className="lg:max-h-fit lg:max-w-xl overflow-hidden">
        <img
          src={image}
          alt={image}
          loading="lazy"
          className="rounded-tl-xl rounded-tr-xl lg:rounded-tr-none lg:rounded-bl-xl h-full w-full object-contain"
        />
      </div>

      {/* Description, Demo and Code buttons */}
      <div className="mx-4 flex flex-col justify-between">
        <div className="pt-4 px-4">
          {/* project title */}
          <h1 className="font-semibold text-lg pt-2">{title}</h1>
          {/* technologies used */}
          <p className="text-xs mb-2">{techUsed}</p>
          {/* project description */}
          <p className="text-left pt-2 border-t-2 pb-2">
            {description.map((desc, index) => (
              <li key={index} className="list-disc">
                {desc}
              </li>
            ))}
          </p>
        </div>
        <div className="flex justify-evenly py-14">
          <Button name={"Demo"} link={linkDemo} />
          <Button name={"Code"} link={linkCode} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
