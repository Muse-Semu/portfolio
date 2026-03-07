import { styles } from "../styles";
import { github, linkedin, muse } from "../assets";
import resume from "../Muse-Semu-resume.pdf";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto flex items-center justify-center pt-[120px]`}>
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-center justify-between gap-10 w-full`}
      >
        <div className="flex flex-col md:w-3/4 lg:w-2/3">
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

        <div className="md:w-1/3 flex justify-center lg:justify-end mt-12 md:mt-0 relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            {/* Soft backdrop glow to emulate cutout depth */}
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-[60px] -z-10 animate-pulse" />
            
            <img
              src={muse}
              alt="Muse Semu"
              className="w-full h-full object-cover rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-500 hover:shadow-[0_20px_50px_rgba(56,189,248,0.2)]"
              style={{
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)'
              }}
            />
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
