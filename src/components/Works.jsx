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
      <div className="bg-tertiary p-5 rounded-2xl w-full flex flex-col h-full hover:shadow-card transition-shadow duration-300">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                  title="view code"
                />
              </div>
            )}
          </div>
        </div>

        <div
          className={`mt-5 flex flex-col flex-grow transition-all duration-300 ${
            isExpanded ? "bg-black bg-opacity-10 p-4 rounded-lg" : ""
          }`}
        >
          <h3 className="text-white font-bold text-[24px] line-clamp-2">
            {name}
          </h3>
          <div className="mt-2 flex flex-wrap gap-2 min-h-[48px]">
            {tags.map((tag, tagIndex) => (
              <p
                key={`${tag.name}-${tagIndex}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
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

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-secondary text-white px-4 py-2 rounded-lg text-[16px] mt-4 hover:bg-opacity-80 transition-colors"
          >
            {isExpanded ? "See Less" : "See More"}
          </button>
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
              className="text-white font-bold text-[28px] mb-6"
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
