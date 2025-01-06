import React, { createContext, useState } from "react";
import project_data from "../data/projects.json";

export const ProjectsContext = createContext({
  projects: [],
  updateProject: () => {},
});

const ProjectsContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([...project_data]);
  const updateProject = (id, newData) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === id ? { ...project, ...newData } : project
      )
    );
  };
  return (
    <ProjectsContext.Provider value={{ projects, updateProject }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContextProvider;
