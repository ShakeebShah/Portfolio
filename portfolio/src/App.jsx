import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ResumeViewer from "./components/ResumeViewer";

const RESUME_URL = "/Shakeeb_CV.pdf";

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0d12]">
      <Nav onViewResume={() => setResumeOpen(true)} />
      <main>
        <Hero onViewResume={() => setResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <ResumeViewer
        open={resumeOpen}
        resumeUrl={RESUME_URL}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
