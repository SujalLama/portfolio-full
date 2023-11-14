import { getHomeData } from "@/api/page";
import About from "@/layouts/AboutSection";
import BlogSection from "@/layouts/BlogSection";
import Contact from "@/layouts/Contact";
import Hero from "@/layouts/Hero";
import ProjectSection from "@/layouts/ProjectSection";

export default async function Home() {
  const sections = await getHomeData();
  
  if(!sections || !sections.length) {
    return null;
  }

  return (
    <>
    {
      sections.map((section : any) => {
        if(section.__component === 'sections.hero') {
          return <Hero key={section.id} data={{
            title: section.title, 
            subTitle: section.subTitle, 
            description: section.description,
            img: {alt: section?.img?.data.attributes.alternativeText || '', src: process.env.MEDIA_URL + section.img.data.attributes.url}
          }} />
        }

        if(section.__component === 'sections.about') {
          return <About key={section.id} data={{
            title : section.title,
            img: {alt: section?.img?.data.attributes.alternativeText || '', src: process.env.MEDIA_URL + section.img.data.attributes.url},
            detail: section?.description,
            skills: section.skills,
          }} />
        }

        if(section.__component === 'sections.latest-blogs') {
          
          if(section.content === 'blogs') {
            return <BlogSection key={section.id} data={{
              title: section.title,
              desc: section.desc
            }} />
          }

          if(section.content === 'projects') {
            
            return <ProjectSection key={section.id} data={{
              title: section.title,
              desc: section.desc
            }}/>
          }
        }

        if(section.__component === 'sections.contact') {
          console.log(section);
          const {title, subTitle, address, mail, phone} = section;
          return <Contact key={section.id} data={{
            title,
            subTitle,
            address,
            mail,
            phone,
          }}/>
        }

      })
    }
    </>
  )
}
