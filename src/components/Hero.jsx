
import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";
import "../styles/hero.css"


const roles = [
  "Full-Stack Developer",
  "React Frontend Developer",
  "Python & Django Backend Developer"
];

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setTimeout(() => {}, 1000);
        } else {
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 hero-left">
            <h1 className="hero-title">
              Hello, my name is <span>Sandeep S</span>
            </h1>

            <h2 className="hero-role">
              I'm a <span className="typing">{text}</span>
              <span className="cursor">|</span>
            </h2>

            <p className="hero-desc">
              I build clean, responsive, and scalable applications by combining
              thoughtful frontend design with reliable backend systems.
            </p>

            <div className="hero-buttons">
              <a href="#about" className="btn btn-outline-light">
                More About Me
              </a>
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/Nano-Cosmos" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/sandeep-s78/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:sandeepfd78@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 hero-right">
            <div className="hero-image-wrapper">
              <img
                src="/images/portfolio_img.jpg"   // replace with your image
                alt="Sandeep S"
                className="hero-image"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
