import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, linkedin, muse } from "../assets";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="md:grid ">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Muse</span>
          </h1>
          <p className={`${styles.heroSubText}  text-white-100`}>
            <br className="sm:block hidden" />
            Full-stack developer
          </p>
          <ul className="flex justify-center  items-center gap-7 mt-6">
            <li className="rounded-full h-12 flex items-center justify-center w-12 bg-white">
              <a
                href="https://www.linkedin.com/in/semu-muse-582a36280/"
                target="_blank"
              >
                {" "}
                <img
                  src={linkedin}
                  alt="Linkedin"
                  className="rounded-full h-10 w-10"
                />
              </a>
            </li>
            <li className="rounded-full h-12 flex items-center justify-center w-12 bg-white">
              <a href="https://github.com/Muse-Semu" target="_blank">
                <img
                  src={github}
                  alt="Github"
                  className="rounded-full h-10 w-10"
                />
              </a>
            </li>
          </ul>

          <Tilt className="w-[300px] absolute right-9  lg:flex mt-5 ">
            <motion.div
              variants={fadeIn("right", "spring", 2 * 0.5, 0.75)}
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
              >
                <img
                  src={muse}
                  alt="web-development"
                  className=" object-cover rounded-full  "
                />

                <h3 className="text-white text-[20px] font-bold text-center">
                  Muse Semu
                </h3>
              </div>
            </motion.div>
          </Tilt>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
