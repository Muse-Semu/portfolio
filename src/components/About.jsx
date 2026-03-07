import React from "react";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <div className="xs:w-[250px] w-full">
    <div
      className="w-full bg-gradient-to-br from-accent to-tertiary p-[1px] rounded-[20px] shadow-card hover:scale-105 transition-transform duration-300"
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I am a dedicated Backend and DevOps Engineer passionate about architecting scalable, resilient, and high-performance systems. I specialize in building robust microservices with Spring Boot, optimizing complex PostgreSQL databases, and implementing event-driven architectures utilizing Kafka and Debezium. With deep expertise in the DevOps lifecycle, I orchestrate zero-downtime production deployments using Docker and Kubernetes, while ensuring system reliability through OpenTelemetry observability and CI/CD pipeline automation via Jenkins. I thrive on solving complex architectural challenges and delivering solutions that drive massive efficiency gains.
      </p>

      <p className="text-white font-bold text-[28px] mt-6">Services</p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
