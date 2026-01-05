import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import Collapse from "bootstrap/js/dist/collapse";
import "../styles/navbar.css"

const Navbar = () => {
    const [active, setActive] = useState("home");
    const [open, setOpen] = useState(false);


    const handleLinkClick = (section) => {
        setActive(section);
        setOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg mynavbar py-3">
            <div className="container">
                <span className="brand">
                    <FaLessThan />DevProfile/<FaGreaterThan />
                </span>

                <button
                    className="navbar-toggler toggle-btn"
                    type="button"
                    onClick={() => setOpen(prev => !prev)}
                >
                    <IoMenu className="navbar-toggler-icon" />
                </button>

                {/* Collapse */}
                <div  className={`navbar-collapse custom-collapse ${open ? "open" : ""}`}>
                    <ul className="navbar-nav ms-auto">
                        {[
                            ["home", "Home"],
                            ["about", "About"],
                            ["skills", "Skills"],
                            ["portfolio", "Portfolio"],
                            ["services", "Services"],
                            ["contact", "Contact"],
                        ].map(([id, label]) => (
                            <li className="nav-item" key={id}>
                                <a
                                    href={`#${id}`}
                                    className={`nav-link ${active === id ? "active" : ""}`}
                                    onClick={() => handleLinkClick(id)}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
