import React, { useEffect, useState } from "react";

const FavoriteProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/projects")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
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
