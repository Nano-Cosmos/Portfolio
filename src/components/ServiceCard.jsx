import React from "react"

const ServiceCard = ({icon: Icon,title,description}) => {

    return (
        <div className="service-card text-center h-100">
            <div className="service-icon">
            <Icon/>
            </div>
            <h5 className="service-title">{title}</h5>
            <p className="service-desc">{description}</p>
        </div>
    )
}

export default ServiceCard