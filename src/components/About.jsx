import React from "react";
import SectionHeader from "./SectionHeader"
import "../styles/about.css"

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <SectionHeader
          tinyText="My Intro"
          mainText="About me"
        />

        <div className="about-content mt-4">
          <p className="about-intro">
            Hi, I'm <span>Sandeep S</span> — a developer based in India.
          </p>

          <p>
            I enjoy building things for the web, especially experiences that
            feel clean, intuitive, and purposeful. I’m naturally curious and
            tend to dive deep into problems, breaking them down until the logic
            feels clear and satisfying.
          </p>

          <p>
            I learn best by doing — building real-world projects, experimenting,
            and refining my approach along the way. Once I’m engaged, I can stay
            focused for hours, constantly improving and exploring better
            solutions.
          </p>

          <p>
            I’m particularly interested in frontend development with React and
            backend systems using Python and Django, where thoughtful design and
            solid logic come together.
          </p>

          <div className="about-education mt-4">
            <h6>Education</h6>
            <p>
              B.Tech in Computer Science & Engineering <br />
              <span>College of Engineering Muttathara — 2025</span>
            </p>
          </div>
          <div className="about-cta mt-4">
            <a href="#contact" className=" hire-btn">
              Hire Me!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
