import React, { useContext, useMemo } from "react";
import { ProjectsContext } from "../context/ProjectsContext";

const FavoriteProjects = () => {
  const { projects } = useContext(ProjectsContext);
  const favouriteProjects = useMemo(
    () => projects.filter((project) => project.favourite),
    [projects]
  );
  return (
    <div className="flex flex-col gap-2">
      <p>Favorite Projects</p>
      <ul className="flex flex-col gap-1 pl-2">
        {favouriteProjects.map((project) => (
          <li key={project.id} className="list-disc list-inside">
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteProjects;
