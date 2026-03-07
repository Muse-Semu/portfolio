import { styles } from "../styles";
import { github, linkedin, muse } from "../assets";
import resume from "../Muse-Semu-resume.pdf";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto flex items-center justify-center pt-[120px]`}>
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-center justify-between gap-10 w-full`}
      >
        <div className="flex flex-col md:w-1/2">
          <div className="flex flex-row items-center gap-4">
            <div className="w-5 h-5 rounded-full bg-accent" />
            <div className="h-1 w-20 bg-gradient-to-r from-accent to-transparent" />
          </div>

          <h1 className={`${styles.heroHeadText} text-text-base mt-4`}>
            Hi, I'm <span className="text-accent">Muse</span>
          </h1>
          <p className={`${styles.heroSubText} text-secondary mt-2 max-w-lg`}>
            Backend & DevOps Engineer
            <br />
            Building scalable, secure, and resilient infrastructure.
          </p>
          <ul className="flex items-center gap-4 mt-8">
            <li className="rounded-full h-12 flex items-center justify-center w-12 bg-text-base hover:scale-110 transition-transform cursor-pointer">
              <a href="https://www.linkedin.com/in/muse-semu-582a36280/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="Linkedin" className="rounded-full h-10 w-10 p-0.5" />
              </a>
            </li>
            <li className="rounded-full h-12 flex items-center justify-center w-12 bg-text-base hover:scale-110 transition-transform cursor-pointer">
              <a href="https://github.com/Muse-Semu" target="_blank" rel="noreferrer">
                <img src={github} alt="Github" className="rounded-full h-10 w-10 p-0.5" />
              </a>
            </li>
          </ul>

          <div className="mt-10">
            <a 
              href={resume} 
              download="Muse_Semu_CV.pdf" 
              className="px-8 py-3 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-[16px] hover:bg-accent hover:text-primary transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] flex items-center justify-center gap-3 w-fit"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Download CV
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full max-w-[350px] bg-tertiary p-6 rounded-2xl shadow-card border border-white/10 flex flex-col items-center">
            <img
              src={muse}
              alt="Muse Semu"
              className="w-56 h-56 object-cover rounded-full border-4 border-tertiary shadow-xl hover:border-accent transition-colors duration-300"
            />
            <h3 className="text-text-base text-2xl font-bold text-center mt-6">
              Muse Semu
            </h3>
            <p className="text-secondary text-center mt-2 font-medium">Backend & DevOps Engineer</p>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 hover:border-accent transition-colors">
            <div className="w-3 h-3 rounded-full bg-secondary animate-bounce mt-1" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
