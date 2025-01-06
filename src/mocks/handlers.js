import { http, HttpResponse } from "msw";
import projectsData from "../data/projects.json";

const baseURL = "http://localhost:3000"; // or your base URL
let projects = [...projectsData]; // Create a mutable copy

export const handlers = [
  // Mock GET request
  http.get(`${baseURL}/api/projects`, () => {
    return HttpResponse.json(projects);
  }),

  // Mock GET request for a specific project
  http.get(`${baseURL}/api/projects/:id`, ({ params }) => {
    const { id } = params;
    const project = projects.find((u) => u.id === id);
    if (!project) {
      return HttpResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }
    return HttpResponse.json(project, { status: 200 });
  }),

  // Mock PUT request to update a project
  http.put(`${baseURL}/api/projects/:id`, async ({ params, request }) => {
    const { id } = params;
    const updatedData = await request.json(); // Parse the body to get the object

    // Update the project in the data array
    projects = projects.map((project) =>
      project.id === id ? { ...project, ...updatedData } : project
    );

    // Return just the updated project for consistency
    const updatedProject = projects.find((p) => p.id === id);
    return HttpResponse.json(updatedProject, { status: 200 });
  }),
];
