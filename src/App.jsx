import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  RealWorldChallenges,
  ThemeToggle,
} from "./components";
import KeyAchievment from "./components/KeyAchievment";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary min-h-screen">
        <div className="bg-primary bg-cover bg-no-repeat bg-center">
          <Navbar className="navbar" />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <RealWorldChallenges />
        <KeyAchievment className="key-achievement" />
        <Tech />
        <Feedbacks />
        <div className="relative z-0 contact-wrapper bg-tertiary pb-12">
          <Contact />
        </div>
        <ThemeToggle />
      </div>
    </BrowserRouter>
  );
};

export default App;
