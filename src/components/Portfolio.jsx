import { useState } from "react";
import projectData from "../data/projectData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import SectionHeader from "./SectionHeader";
import "../styles/portfolio.css"

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="portfolio-section" id="portfolio">
        <SectionHeader tinyText="My Portfolio" mainText="Works" />
      {/* PROJECT GRID */}
      <div className="portfolio-grid">
        {[...projectData].reverse().map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Portfolio;
