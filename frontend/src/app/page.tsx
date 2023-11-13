import About from "@/layouts/AboutSection";
import BlogSection from "@/layouts/BlogSection";
import Contact from "@/layouts/Contact";
import Hero from "@/layouts/Hero";
import ProjectSection from "@/layouts/ProjectSection";

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
