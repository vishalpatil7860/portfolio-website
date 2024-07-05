import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import StatsSection from '@/components/StatsSection';
import 'animate.css/animate.min.css';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <StatsSection />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
