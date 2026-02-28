import React from "react";

export default function ProjectCard({ project, image }) {
  return (
    <div className="project-card">
      <img src={image} alt={project.name} />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
    </div>
  );
}