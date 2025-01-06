import React, { useEffect, useState } from "react";
import { withRootLayout } from "../hoc/withRootLayout";
import ProjectUpdateForm from "../components/ProjectUpdateForm";
import { useNavigate, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

const ProjectDetail = () => {
  const { id } = useParams(); // Get the project ID from the URL parameters
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [project, setProject] = useState(); // State to store project details
  const [loading, setLoading] = useState(false); // State to manage loading spinner

  useEffect(() => {
    setLoading(true); // Set loading to true when fetching data
    fetch(`http://localhost:3000/api/projects/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data); // Set the project data from the API response
      })
      .catch((err) => {
        console.log("err", err); // Log any errors
        navigate("/"); // Navigate to the home page on error
      })
      .finally(() => {
        setLoading(false); // Set loading to false after fetching data
      });
  }, [id, navigate]); // Dependency array to re-run effect when id or navigate changes

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <CircularProgress /> {/* Show loading spinner while fetching data */}
        </Box>
      ) : (
        project && <ProjectUpdateForm project={project} /> // Show project update form when data is loaded
      )}
    </>
  );
};

export default withRootLayout(ProjectDetail); // Export component wrapped with root layout
