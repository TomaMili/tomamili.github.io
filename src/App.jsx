import { MotionConfig } from "framer-motion";
import Nav from "./ui/Nav";
import Hero from "./ui/Hero";
import Marquee from "./ui/Marquee";
import Work from "./ui/Work";
import About from "./ui/About";
import Experience from "./ui/Experience";
import Skills from "./ui/Skills";
import Education from "./ui/Education";
import Contact from "./ui/Contact";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="grain">
        <a
          href="#work"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Nav />
        <main>
          <Hero />
          <Marquee />
          <Work />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  );
}

export default App;
