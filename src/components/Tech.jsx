import React from "react";

import { SectionWrapper } from "../hoc";
import { tech, technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className="flex flex-col w-full">
      <div>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have Skilled on
        </p>
        <h2 className={`${styles.sectionHeadText} text-center mb-10`}>
          Technologies
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {tech.map((category) => (
          <div 
            key={category.title} 
            className="bg-tertiary p-6 rounded-2xl shadow-card border border-black-200/10"
          >
            <h3 className="text-text-base text-[20px] font-bold mb-6 text-center border-b border-black-200/20 pb-2">
              {category.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {category.items.map((item) => (
                <div 
                  className="flex items-center gap-3 bg-primary py-2 px-4 rounded-full border border-black-200/10 shadow-sm hover:scale-105 hover:border-accent/50 transition-all duration-300" 
                  key={item.name}
                  title={item.name}
                >
                  <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                  <span className="text-text-base text-[14px] font-medium whitespace-nowrap">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
