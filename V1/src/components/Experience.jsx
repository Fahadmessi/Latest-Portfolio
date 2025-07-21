import React from "react";
import Upwork from "../assets/img/logo-upwork.svg"; // Adjust the path as necessary
const Experience = () => {
  const experiences = [
    {
      logo: Upwork,
      title: "Independent Freelancer",
      duration: "Nov 2021 - Present",
      tasks: [
        "Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.",
        "Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.",
      ],
    },
    {
      logo: Upwork,
      title: "Team Lead",
      duration: "Jul 2017 - Oct 2021",
      tasks: [
        "Acted as team lead in different projects.",
        "Brainstormed new ideas & gathered requirements for internal projects.",
        "Designed architecture of different projects (frontend + backend).",
        "Worked on enterprise-level projects for a variety of clients.",
        "Handled sprint planning & task distribution.",
      ],
    },
    {
      logo: Upwork,
      title: "Full Stack Developer",
      duration: "Dec 2015 - May 2017",
      tasks: ["Worked as a full stack developer (React / Laravel)."],
    },
  ];

  return (
    <section className="experience">
      <div className="experiences-content">
        <div className="top-data">
          <h3>Experience</h3>
          <p>Here is a quick summary of my most recent experiences:</p>
        </div>
        <div className="cards">
          {experiences.map((exp, index) => (
            <div key={index}>
              <div className="exp-img">
                <img src={exp.logo} alt="" />
              </div>
              <div className="card-content">
                <h1>{exp.title}</h1>
                <ul>
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2>{exp.duration}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
