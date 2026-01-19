import About from "@/components/about";
import Bio from "@/components/bio";
import Contact from "@/components/contact";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-16">
      <Bio />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
