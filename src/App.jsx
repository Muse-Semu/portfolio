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
  StarsCanvas,
} from "./components";
import KeyAchievment from "./components/KeyAchievment";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar className="navbar" /> {/* Added class for targeting */}
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <KeyAchievment className="key-achievement" />{" "}
        {/* Added class for targeting */}
        <Tech />
        <Feedbacks />
        <div className="relative z-0 contact-wrapper">
          {" "}
          {/* Added class for targeting */}
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
