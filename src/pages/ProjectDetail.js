import React, { useEffect, useState } from "react";
import { withRootLayout } from "../hoc/withRootLayout";
import ProjectUpdateForm from "../components/ProjectUpdateForm";
import { useNavigate, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/api/projects/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      })
      .catch((err) => {
        console.log("err", err);
        navigate("/");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
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
          <CircularProgress />
        </Box>
      ) : (
        project && <ProjectUpdateForm project={project} />
      )}
    </>
  );
};

export default withRootLayout(ProjectDetail);
