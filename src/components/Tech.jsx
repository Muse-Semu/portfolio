import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { tech, technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have Skilled on
        </p>
        <h2 className={`${styles.sectionHeadText} text-center mb-20 ml-2`}>
          Technologies
        </h2>
      </motion.div>
      {/* <div className="flex flex-row flex-wrap justify-center gap-10 mt-5">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div> */}
      <div className="">
        {tech.map((category) => (
          <div key={category.title}>
            <h2 className={`${styles.sectionSubText} text-left`}>
              {category.title}
            </h2>
            <div className="flex flex-row flex-wrap justify-center gap-10 mt-5 mb-20">
              {category.items.map((item) => (
                <div className="w-28 h-28 " key={item.name}>
                  {/* < icon={item.icon} /> */}
                  <img src={item.icon} alt="" />
                  <h1 className=" text-center">{item.name}</h1>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
