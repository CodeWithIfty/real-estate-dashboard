import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ProjectCard = ({ project, refetch }) => {
  const axiosSecure = useAxiosSecure();
  console.log(project);
  const handleDelete = async (id) => {
    const res = await axiosSecure.delete(`/projects/${id}`);
    refetch();
    console.log(res);
  };
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={`https://apis.rpi.gov.bd/frontend/uploads/${project.projectImages[0].image}`}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {project.project.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Location: </span>
          {project.project.location}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Category: </span>
          {project.project.category}
        </p>
        <button
          onClick={() => handleDelete(project.project.id)}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
