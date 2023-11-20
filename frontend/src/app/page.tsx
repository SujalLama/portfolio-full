import { API_URL } from "@/api/constants";
import { getHomeData } from "@/api/page";
import About from "@/layouts/AboutSection";
import BlogSection from "@/layouts/BlogSection";
import Contact from "@/layouts/Contact";
import Hero from "@/layouts/Hero";
import ProjectSection from "@/layouts/ProjectSection";

import { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: { slug: string }
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug
 
  // fetch data
  const {data:data} = await fetch(API_URL + `/global` ).then((res) => res.json());
 
  if(!data) {
    return {
      title: 'Sujal\'s Portfolio',
      description: 'This is a portfolio of Sujal Lama.',
    }
  }
 
  return {
    title: data.attributes.siteTitle,
    description: data.attributes.siteDescription,
  }
}


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
            img: {alt: section?.img?.data.attributes.alternativeText || '', src: process.env.NEXT_PUBLIC_MEDIA_URL + section.img.data.attributes.url}
          }} />
        }

        if(section.__component === 'sections.about') {
          return <About key={section.id} data={{
            title : section.title,
            img: {alt: section?.img?.data.attributes.alternativeText || '', src: process.env.NEXT_PUBLIC_MEDIA_URL + section.img.data.attributes.url},
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
