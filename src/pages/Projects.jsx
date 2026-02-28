import React from "react";
import "../styles/pages.css";
import { projectsData } from "../data/projectsData";
import ProjectCard from "../components/common/ProjectCard.jsx";

import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";

const images = [project1, project2, project3];

export default function Projects() {
  return (
    <div className="page page-projects">
      <div className="container">
        <h1 className="section-title">Our Projects</h1>
        <p className="section-desc">
          A selection of our completed projects across hospitality,
          residential, and commercial sectors worldwide.
        </p>

        <div className="grid grid-3">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              image={images[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}