import React from "react";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import { Routes, Route } from "react-router-dom";

// Main App component
function App() {
  return (
    // Define the routes for the application
    <Routes>
      {/* Route for the Projects page */}
      <Route path="/" element={<Projects />} />
      {/* Route for the ProjectDetail page with a dynamic id */}
      <Route path="/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
