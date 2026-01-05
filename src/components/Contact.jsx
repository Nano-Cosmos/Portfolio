import React from "react";
import SectionHeader from "./SectionHeader";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { IoSend } from "react-icons/io5";
import "../styles/contact.css"
import emailjs from '@emailjs/browser';
import { useRef } from 'react'

const Contact = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                alert("Message sent successfully!");
                formRef.current.reset();
            })
            .catch(() => {
                alert("Failed to send message");
            });
    };


    return (
        <section id="contact" className="py-5">
            <SectionHeader tinyText="Let's Connect" mainText="Get In Touch" />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
                        <form ref={formRef} onSubmit={sendEmail} className="contact-form">

                            <div className="form-group">
                                <input type="text" name="name" required placeholder=" " />
                                <label>Username</label>
                            </div>

                            <div className="form-group">
                                <input type="email" name="email" required placeholder=" " />
                                <label>Email</label>
                            </div>

                            <div className="form-group">
                                <textarea rows="5" name="message" required placeholder=" "></textarea>
                                <label>Message</label>
                            </div>

                            <button type="submit" className="contact-btn">
                                <IoSend /> Send Message
                            </button>

                        </form>
                    </div>

                    <div className="col-md-6 order-2 order-md-1 ">
                        <div className="social-links d-flex flex-column gap-4">
                            <a
                                href="mailto:sandeepfd78@gmail.com"
                                className="social-card"
                            >
                                <FaEnvelope className="social-icon" />
                                <span className="social-title">Email</span>
                                <span className="social-subtitle">Send me a message<FiArrowUpRight /></span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/sandeep-s78/"
                                target="_blank"
                                rel="noreferrer"
                                className="social-card"
                            >
                                <FaLinkedin className="social-icon" />
                                <span className="social-title">LinkedIn</span>
                                <span className="social-subtitle">Connect with me<FiArrowUpRight /></span>
                            </a>

                            <a
                                href="https://github.com/Nano-Cosmos"
                                target="_blank"
                                rel="noreferrer"
                                className="social-card"
                            >
                                <FaGithub className="social-icon" />
                                <span className="social-title">GitHub</span>
                                <span className="social-subtitle">View my projects<FiArrowUpRight /></span>
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
