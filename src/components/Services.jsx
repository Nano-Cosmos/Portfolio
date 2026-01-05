import React from "react";
import SectionHeader from "./SectionHeader";
import ServiceCard from "./ServiceCard";
import "../styles/services.css"
import { FaLaptopCode, FaLayerGroup, FaMobileAlt } from "react-icons/fa";
import { HiOutlineServer } from "react-icons/hi";

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        
        <SectionHeader
          tinyText="What i do"
          mainText="Services I Offer"
        />

        <div className="row g-4 mt-1">

          <div className="col-md-6 col-lg-3">
            <ServiceCard
              icon={FaLaptopCode}
              title="Frontend Development"
              description="Building clean, responsive, and user-friendly interfaces with modern frontend technologies."
            />
          </div>

          <div className="col-md-6 col-lg-3">
            <ServiceCard
              icon={FaLayerGroup}
              title="Full Stack Development"
              description="Developing complete web applications by handling both frontend and backend functionality."
            />
          </div>

          <div className="col-md-6 col-lg-3">
            <ServiceCard
              icon={HiOutlineServer}
              title="API Development"
              description="Designing secure and efficient APIs to connect applications with data and services."
            />
          </div>

          <div className="col-md-6 col-lg-3">
            <ServiceCard
              icon={FaMobileAlt}
              title="Responsive Web Design"
              description="Creating websites that adapt seamlessly across desktops, tablets, and mobile devices."
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
