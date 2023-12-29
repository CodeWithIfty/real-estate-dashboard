import { useLocation } from "react-router-dom";
import Heading from "../../components/shared/Heading";
import ProjectList from "../../components/Project/ProjectList";
import AddProject from "../../components/Project/AddProject";
import useProjects from "../../hooks/useProjects";

const Project = () => {
  const location = useLocation();
  const { projects, refetch } = useProjects();
  return (
    <div>
      <div className="p-3 grid lg:grid-cols-6 gap-5">
        <div className="col-span-3">
          <ProjectList projects={projects} refetch={refetch} />
        </div>
        <div className="col-span-3">
          <AddProject refetch={refetch} />
        </div>
      </div>
    </div>
  );
};

export default Project;
