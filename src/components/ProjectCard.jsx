import React from 'react'

const ProjectCard = ({ project, onClick }) => {

    return (
        <div className='project-card' onClick={() => onClick(project)}>
            <div className='project-card-image'>
                <img src={project.images[0]} alt={project.title} />
            </div>
            <div className='project-card-content d-flex flex-column justify-content-between'>
                <div>
                    <h5>{project.title}</h5>
                    <p>{project.shortDescription}</p>
                </div>
                <button className='view-project-btn'>View Project</button>
            </div>
        </div>
    )
}

export default ProjectCard