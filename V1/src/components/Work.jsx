import React from "react";
import { projects } from "../data/portfolioData";

const Work = () => {
  return (
    <section className="work" id="work">
      <div className="work-content">
        <div className="work-top">
          <h3 className="section-title">Work</h3>
          <p className="section-subtitle">
            Some of the noteworthy projects I have built:
          </p>
        </div>
        <div className="work-bottom">
          {projects.map((project, index) => (
            <div className="project-card-1" key={index}>
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} Project Image`}
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech-stack">
                  {project.tags.map((tag, i) => (
                    <span className="tech-tag" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
