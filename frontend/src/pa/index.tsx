import BlogSection from "../layouts/BlogSection";
import Contact from "../layouts/Contact";
import Hero from "../layouts/Hero";
import ProjectSection from "../layouts/ProjectSection";
import About from "../layouts/AboutSection";

export default function Home() {
    return (
      <>
        <Hero />
        <About />
        <ProjectSection />
        <BlogSection />
        <Contact />
      </>
    )
  }
  