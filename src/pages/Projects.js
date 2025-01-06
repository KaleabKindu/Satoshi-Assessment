import React from "react";
import ProjectsList from "../components/ProjectsList";
import { withRootLayout } from "../hoc/withRootLayout";

const Projects = () => {
  return <ProjectsList />;
};

export default withRootLayout(Projects);
