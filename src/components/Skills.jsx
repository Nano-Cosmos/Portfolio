import React, { useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPython, FaDatabase } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import SectionHeader from "./SectionHeader";
import "../styles/skills.css"

const frontendSkills = [
  { name: "HTML", icon: <FaHtml5 />, percentage: 90 },
  { name: "CSS", icon: <FaCss3Alt />, percentage: 85 },
  { name: "JavaScript", icon: <FaJs />, percentage: 75 },
  { name: "React", icon: <FaReact />, percentage: 80 },
  { name: "Bootstrap", icon: <FaBootstrap />, percentage: 60 },
];

const backendSkills = [
  { name: "Python", icon: <FaPython />, percentage: 75 },
  { name: "Django", icon: <SiDjango />, percentage: 60 },
  { name: "MySQL", icon: <FaDatabase />, percentage: 60 },
];

const SkillsSection = () => {

  useEffect(() => {
    const skillBars = document.querySelectorAll(".skill-bar");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const bar = entry.target.querySelector(".progress-bar");
          if (entry.isIntersecting) {
            bar.style.width = bar.getAttribute("data-percentage") + "%";
          } else {
            bar.style.width = "0%"; // reset when out of view
          }
        });
      },
      { threshold: 0.5 }
    );

    skillBars.forEach((bar) => observer.observe(bar));

    return () => observer.disconnect(); // cleanup on unmount
  }, []);

  return (
    <section className="skills-section py-2" id="skills">
      <div className="container">
        <SectionHeader tinyText="My Expertise" mainText="Skills" />

        <div className="row mt-5">
          {/* Frontend Column */}
          <div className="col-md-6">
            <h4 className="text-light mb-4">Frontend</h4>
            {frontendSkills.map((skill, idx) => (
              <div className="skill-bar mb-3" key={idx}>
                <div className="d-flex align-items-center mb-1">
                  <span className="skill-icon me-2">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="ms-auto skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    data-percentage={skill.percentage}
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Backend Column */}
          <div className="col-md-6 mt-5 mt-md-0">
            <h4 className="text-light mb-4">Backend</h4>
            {backendSkills.map((skill, idx) => (
              <div className="skill-bar mb-3" key={idx}>
                <div className="d-flex align-items-center mb-1">
                  <span className="skill-icon me-2">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="ms-auto skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    data-percentage={skill.percentage}
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
