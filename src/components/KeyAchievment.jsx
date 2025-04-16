import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { achievements } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { anku, github, live } from "../assets";

const AchievmentCard = ({ achievement }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={achievement.date}
      iconStyle={{ background: achievement.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={achievement.icon}
            alt={achievement.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {achievement.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {achievement.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {achievement.points.map((point, index) => (
          <li
            key={`achievement-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <ul className="flex items-center justify-center  gap-9">
          <li className="flex flex-col items-center justify-center">
            <a
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={live}
                alt=""
                className="h-10 w-10 rounded-full"
                srcSet=""
              />
              <span className="text-center">Live</span>
            </a>
          </li>
          <li className="flex flex-col items-center justify-center">
            <a href={achievement.code} target="_blank">
              <img src={github} alt="" className="h-10 w-10 rounded-full" />{" "}
              <span className="text-center">code</span>
            </a>
          </li>
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Achievment = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Key Achievments.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {achievements.map((achievement, index) => (
            <AchievmentCard
              key={`achievement-${index}`}
              achievement={achievement}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Achievment, "KeyAchievment");
