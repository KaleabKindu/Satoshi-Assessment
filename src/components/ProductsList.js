import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const ProductsList = () => {
  const navigate = useNavigate();
  const { products } = useContext(ProductsContext);
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
  return (
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
          {products.map((product) => {
            return (
              <TableRow
                hover
                key={product.id}
                sx={{ backgroundColor: "rgb(241, 241, 241)" }}
              >
                {columns.map((column) => {
                  const value = product[column.id];
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
                    onClick={() => navigate(`/${product.id}`)}
                    sx={{
                      paddingY: "2px",
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
  );
};

export default ProductsList;
