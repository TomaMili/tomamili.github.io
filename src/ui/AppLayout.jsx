import Header from "./Header";
import "../index.css";
import Background from "./Background";
import Section from "./Section";
import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Projects from "./Projects";
import Expirience from "./Expirience";
import Education from "./Education";
import Contact from "./Contact";

function AppLayout() {
  return (
    <>
      <Background />
      <div className="relative z-10 h-screen overflow-y snap-y snap-mandatory overflow-x-hidden scroll-pt-2">
        <Header />
        <Section>
          <Aboutme />
        </Section>
        <Section>
          <Skills />
        </Section>
        <Section>
          <Projects />
        </Section>
        <Section>
          <Education />
        </Section>
        <Section>
          <Expirience />
        </Section>
        <Section>
          <Contact />
        </Section>
      </div>
      <p className="text-gray-400 absolute bottom-3 text-[12px] left-3">
        © 2025 Made by Toma Milićević. All rights reserved.
      </p>
    </>
  );
}

export default AppLayout;
