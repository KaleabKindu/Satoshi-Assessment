import React, { useEffect, useState } from "react";

const FavoriteProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    // Fetch the list of projects from the API
    fetch("http://localhost:3000/api/projects")
      .then((res) => res.json()) // Parse the JSON response
      .then((data) => {
      // Filter the projects to only include the favorite ones and update the state
      setProjects(data.filter((project) => project.favourite));
      });
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <p>Favorite Projects</p>
      <ul className="flex flex-col gap-1 pl-2">
        {projects.map((project) => (
          <li key={project.id} className="list-disc list-inside">
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteProjects;
