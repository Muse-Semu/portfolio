import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { realWorldChallenges } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { anku, github } from "../assets";

const ChallengeCard = ({ challenge }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "var(--tertiary)",
        color: "var(--text-base)",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={challenge.date}
      iconStyle={{ background: challenge.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={challenge.icon}
            alt={challenge.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-text-base text-[24px] font-bold">
          {challenge.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {challenge.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {challenge.points.map((point, index) => (
          <li
            key={`challenge-point-${index}`}
            className="text-text-base/80 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <ul className="flex items-center justify-center  gap-9">

          <li className="flex flex-col items-center justify-center">
            {challenge.code && (
              <a href={challenge.code} target="_blank" className="text-text-base">
                <img src={github} alt="" className="h-10 w-10 rounded-full" />{" "}
                <span className="text-center">code</span>
              </a>
            )}
          </li>
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const RealWorldChallenges = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} text-center`}>
          Deep Dives into Real-World Challenges
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Real-World Challenges.
        </h2>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {realWorldChallenges.map((challenge, index) => (
            <ChallengeCard
              key={`challenge-${index}`}
              challenge={challenge}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(RealWorldChallenges, "challenges");
