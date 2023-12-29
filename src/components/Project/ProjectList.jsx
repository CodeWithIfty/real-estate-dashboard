import React from "react";
import ProjectCard from "./ProjectCard";
import useProjects from "../../hooks/useProjects";

const ProjectList = ({ projects, refetch }) => {
  return (
    <div>
      <div className="navbar flex-col xl:flex-row bg-white dark:bg-black">
        <div className="flex-1">
          <a className="btn  btn-ghost normal-case md:text-xl text-sm">
            Project List
            <span className="font-bold border-l-2 px-3"></span>
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              //   value={searchRolll}
              className="input bg-gray-100 dark:bg-black input-bordered w-24 md:w-auto"
              //   onChange={(e) => setSearchRoll(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap justify-between gap-4">
        {projects?.map((project, index) => (
          <ProjectCard key={index} project={project} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
