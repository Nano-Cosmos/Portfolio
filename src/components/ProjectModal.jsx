import { useEffect, useState } from "react";

const ProjectModal = ({ project, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!project) return null;

    const images =
        project.images && project.images.length > 0
            ? project.images
            : [];

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => (document.body.style.overflow = "auto");
    }, []);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-container"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-actions">
                    <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className={`action-btn ${!project.demoLink ? "disabled" : ""
                            }`}
                    >
                        Live Demo
                    </a>
                    <a
                        href={project.gitLink}
                        target="_blank"
                        rel="noreferrer"
                        className={`action-btn ${!project.gitLink ? "disabled" : ""
                            }`}
                    >
                        GitHub
                    </a>
                    <button className="close-btn" onClick={onClose}>
                        ✕
                    </button>
                </div>

                <div className="modal-content">
                    <div className="row justify-content-between">

                        {/* LEFT – Image Slider */}
                        <div className="col-12 col-md-5">
                            <div className="modal-left">
                                {images.length > 0 && (
                                    <>
                                        <img
                                            src={images[currentIndex]}
                                            alt={project.title}
                                            className="modal-image img-fluid"
                                        />

                                        {images.length > 1 && (
                                            <div className="slider-controls">
                                                <button onClick={prevSlide}>‹</button>
                                                <button onClick={nextSlide}>›</button>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>

                        {/* RIGHT – Content */}
                        <div className="col-12 col-md-6">
                            <div className="modal-right">
                                <h2>{project.fullTitle}</h2>

                                <span className="category d-block mb-2">
                                    {project.categoryLabel}
                                </span>

                                <p className="description">
                                    {project.detailedDescription}
                                </p>

                                <div className="tech-stack mb-3">
                                    {project.toolsAndTechnologies.map((tool, index) => (
                                        <span key={index} className="tech-pill">
                                            {tool}
                                        </span>
                                    ))}
                                </div>

                                <div className="meta">
                                    <span>Status: {project.status}</span>
                                    <span>Year: {project.year}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
