import React, { useState } from "react";
import { useFormik } from "formik";
import { object, string } from "yup";
import { TextField } from "@mui/material";
import { FormError, FormLabel } from "./FormElements";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

// Define the validation schema using Yup
const formSchema = object({
  name: string()
    .min(3, "project name must be atleast 3 characters long")
    .required("name is required"),
  description: string().required("description is required"),
  start_date: string()
    .matches(
      /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
      "Date must be in the format YYYY-MM-DD"
    )
    .required("start date is required"),
  end_date: string()
    .matches(
      /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
      "Date must be in the format YYYY-MM-DD"
    )
    .required("end date is required"),
  manager: string().required("project manager is required"),
});

const ProjectUpdateForm = ({ project }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Initialize formik with initial values, validation schema, and submit handler
  const { values, handleChange, handleBlur, errors, touched, handleSubmit } =
    useFormik({
      initialValues: {
        name: project?.name,
        description: project?.description,
        start_date: project?.start_date,
        end_date: project?.end_date,
        manager: project?.manager,
      },
      validationSchema: formSchema,
      onSubmit: async (values) => {
        setLoading(true);
        fetch(`http://localhost:3000/api/projects/${project.id}`, {
          method: "PUT",
          body: JSON.stringify(values),
        })
          .then((res) => res.json())
          .then((data) => {
            navigate("/");
          })
          .finally(() => {
            setLoading(false);
          });
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap items-center gap-2 md:gap-5">
          <FormLabel className="w-36" error={touched.name && !!errors.name}>
            Project ID
          </FormLabel>
          <p>{project.id}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 md:gap-5">
          <FormLabel className="w-36" error={touched.name && !!errors.name}>
            Project Name
          </FormLabel>
          <div>
            <TextField
              placeholder="Name"
              value={values.name}
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && !!errors.name}
            />
            <FormError show={touched.name && !!errors.name}>
              {errors.name}
            </FormError>
          </div>
        </div>
        <div className="relative flex flex-col gap-1 w-full">
          <div className="flex flex-wrap gap-2 md:gap-5">
            <FormLabel
              className="w-36"
              error={touched.description && !!errors.description}
            >
              Description
            </FormLabel>
            <TextField
              value={values.description}
              name="description"
              sx={{ width: { xs: "100%", md: "50%" } }}
              multiline
              rows={4}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.description && !!errors.description}
            />
          </div>
          <FormError show={touched.description && !!errors.description}>
            {errors.description}
          </FormError>
        </div>
        <div className="relative flex flex-col gap-1 w-full">
          <div className="flex flex-wrap items-center gap-2 md:gap-5">
            <FormLabel
              className="w-36"
              error={touched.start_date && !!errors.start_date}
            >
              Start Date
            </FormLabel>
            <TextField
              placeholder="Start Date"
              value={values.start_date}
              name="start_date"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.start_date && !!errors.start_date}
            />
          </div>
          <FormError show={touched.start_date && !!errors.start_date}>
            {errors.start_date}
          </FormError>
        </div>
        <div className="relative flex flex-col gap-1 w-full">
          <div className="flex flex-wrap items-center gap-2 md:gap-5">
            <FormLabel
              className="w-36"
              error={touched.end_date && !!errors.end_date}
            >
              End Date
            </FormLabel>
            <TextField
              placeholder="Start Date"
              value={values.end_date}
              name="end_date"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.end_date && !!errors.end_date}
            />
          </div>
          <FormError show={touched.end_date && !!errors.end_date}>
            {errors.end_date}
          </FormError>
        </div>
        <div className="relative flex flex-col gap-1 w-full">
          <div className="flex flex-wrap items-center gap-2 md:gap-5">
            <FormLabel
              className="w-36"
              error={touched.manager && !!errors.manager}
            >
              Project Manager
            </FormLabel>
            <TextField
              placeholder="Manager"
              value={values.manager}
              name="manager"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.manager && !!errors.manager}
            />
          </div>
          <FormError show={touched.manager && !!errors.manager}>
            {errors.manager}
          </FormError>
        </div>
        <Button
          type="submit"
          className="bg-blue-500"
          disabled={loading}
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100px",
            paddingY: "4px",
            borderRadius: "0px",
            marginLeft: { xs: "0px", md: "10.5rem" },
            backgroundColor: "rgb(59 130 246)",
            color: "white",
          }}
        >
          {loading ? (
            <CircularProgress sx={{ color: "white" }} size={30} />
          ) : (
            "Update"
          )}
        </Button>
      </div>
    </form>
  );
};

export default ProjectUpdateForm;
