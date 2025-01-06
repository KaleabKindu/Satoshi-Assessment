import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

const ProjectsList = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [projects, setProjects] = useState([]); // State to store projects data
  const [loading, setLoading] = useState(false); // State to manage loading state

  // Define table columns
  const columns = [
    { id: "id", label: "Project ID", minWidth: 100 },
    { id: "name", label: "Project Name", minWidth: 170 },
    {
      id: "start_date",
      label: "Start Date",
      minWidth: 100,
      align: "left",
    },
    {
      id: "end_date",
      label: "End Date",
      minWidth: 100,
      align: "left",
    },
    {
      id: "manager",
      label: "Project Manager",
      minWidth: 130,
      align: "center",
    },
    {
      id: "action",
      label: "",
      minWidth: 100,
    },
  ];

  // Fetch projects data from API on component mount
  useEffect(() => {
    setLoading(true); // Set loading to true before fetching data
    fetch("http://localhost:3000/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data); // Update projects state with fetched data
      })
      .finally(() => {
        setLoading(false); // Set loading to false after fetching data
      });
  }, []);

  return (
    <>
      {loading ? (
        // Show loading spinner while data is being fetched
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
        // Display table with projects data
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    sx={{ backgroundColor: "rgb(209, 209, 209)" }}
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((project) => {
                return (
                  <TableRow
                    hover
                    key={project.id}
                    sx={{ backgroundColor: "rgb(241, 241, 241)" }}
                  >
                    {columns.map((column) => {
                      const value = project[column.id];
                      return (
                        value && (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            sx={{ paddingY: "10px", borderBottom: "none" }}
                          >
                            {value}
                          </TableCell>
                        )
                      );
                    })}
                    <TableCell
                      key="action"
                      align="center"
                      sx={{ paddingY: "10px", borderBottom: "none" }}
                    >
                      <Button
                        className="bg-blue-500"
                        onClick={() => navigate(`/${project.id}`)} // Navigate to project edit page
                        sx={{
                          paddingY: "2px",
                          borderRadius: "0px",
                          backgroundColor: "rgb(59 130 246)",
                          color: "white",
                        }}
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default ProjectsList;
