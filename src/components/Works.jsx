import React, { useState } from "react";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  images,
  source_code_link,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full h-full">
      <div className="bg-primary p-6 rounded-3xl border border-black-200/10 w-full flex flex-col h-full hover:shadow-card hover:-translate-y-2 transition-all duration-300">
        <div className="relative w-full h-[250px] overflow-hidden rounded-2xl shadow-sm">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="bg-black/70 backdrop-blur-md w-11 h-11 rounded-full flex justify-center items-center cursor-pointer hover:bg-black/90 transition-colors"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain filter invert"
                  title="view code"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-col flex-grow">
          <h3 className="text-text-base font-bold text-[22px] line-clamp-2 leading-tight">
            {name}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2 min-h-[48px]">
            {tags.map((tag, tagIndex) => (
              <span
                key={`${tag.name}-${tagIndex}`}
                className={`text-[12px] font-semibold px-2 py-1 bg-tertiary rounded-md border border-black-200/10 ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>

          <div>
            {isExpanded && (
              <div
                className="mt-4 transition-all duration-300"
              >
                <div className="max-h-[300px] overflow-y-auto pr-2">
                  <p className="text-secondary text-[16px] leading-[26px]">
                    {description}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 flex justify-start">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-text-base text-[14px] font-medium border border-secondary/30 px-4 py-2 rounded-full hover:bg-secondary/10 transition-colors flex items-center gap-2"
            >
              {isExpanded ? "See Less" : "See More"}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <section>
      <div>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects showcase my skills and experience through
          real-world examples of my work. Organized into professional and
          personal categories, each project can be explored by expanding the
          cards to view full details and previews, reflecting my ability to
          solve complex problems and deliver impactful solutions with diverse
          technologies.
        </p>
      </div>

      <div className="mt-20">
        {projects.map((category, categoryIndex) => (
          <div key={`category-${categoryIndex}`} className="mb-12">
            <h3
              className="text-text-base font-bold text-[28px] mb-6"
            >
              {category.category}
            </h3>
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
              {category.contents.map((project, projectIndex) => (
                <ProjectCard
                  key={`project-${categoryIndex}-${projectIndex}-${project.name}`}
                  index={categoryIndex * category.contents.length + projectIndex}
                  {...project}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "projects");
