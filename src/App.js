import React from "react";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Projects />} />
      <Route path="/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
