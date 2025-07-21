import React from "react";
import JS from "../assets/img/Javascript.svg";
import TS from "../assets/img/typescript.svg";
import ReactIcon from "../assets/img/React.svg";
import Next from "../assets/img/Next.svg";
import Node from "../assets/img/nodejs.svg";
import PostgreSQL from "../assets/img/postgresql.svg";
import MongoDB from "../assets/img/mongodb.svg";
import Tailwindcss from "../assets/img/tailwindcss.svg";
import Figma from "../assets/img/figma.svg";
import Git from "../assets/img/git-icon.svg";

const Skills = () => {
  const skills = [
    { name: "Javascript", icon: JS },
    { name: "Typescript", icon: TS },
    { name: "React", icon: ReactIcon },
    { name: "Next.js", icon: Next },
    { name: "Node.js", icon: Node },
    { name: "PostgreSQL", icon: PostgreSQL },
    { name: "MongoDB", icon: MongoDB },
    { name: "Tailwindcss", icon: Tailwindcss },
    { name: "Figma", icon: Figma },
    { name: "Git", icon: Git },
  ];

  return (
    <section className="skill-section">
      <div className="skill-content">
        <div className="skill-top">
          <h3>Skills</h3>
          <p>The skills, tools and technologies I am really good at:</p>
        </div>
        <div className="skill-bottom">
          {skills.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <img src={skill.icon} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
