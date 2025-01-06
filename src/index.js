import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ProjectsContextProvider from "./context/ProjectsContext";

// Get the DOM element where you want to mount the app
const rootElement = document.getElementById("root");
// Create a root
const root = createRoot(rootElement);

// Render your app
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProjectsContextProvider>
        <App />
      </ProjectsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
