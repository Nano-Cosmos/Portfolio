import React from "react";
import "../styles/footer.css"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-md-4 text-center text-md-start">
            <h5 className="footer-brand">DevProfile</h5>
            <p className="footer-role">Full Stack Developer</p>
          </div>
          <div className="col-md-4 text-center">
            <div className="footer-links  justify-content-center">
              <a href="#services">Services</a>
              <a href="#portfolio">Work</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <div className="footer-socials">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <h5 className="text-center mt-5">– Thanks for visiting! –</h5>
        <p className="text-center"><small className="text-secondary">© 2026 DevProfile. All rights reserved.</small></p>
      </div>
    </footer>
  );
};

export default Footer;
