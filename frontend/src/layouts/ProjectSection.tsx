"use client";

import QueryProvider from "@/providers/QueryProvider";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "@/api/projects";
import Link from "next/link";
import Image from "next/image";
import { TagType } from "@/api/dataFormatter";


let data : IProject[] | null = null;

// const projects = [
//     {
//         id: "nasidfd232",
//         slug: "pigment-chart",
//         title: "Pigment chart",
//         short_desc: "string;",
//         tags: ["react"],
//         banner: {url: "https://images.ctfassets.net/n6ipnb4tupgw/3fWjhco5IrqibZT3lBbGB9/e1e4561d58712f3a5f6f1099851c544e/pigmet-chart.webp", alt: "pigment chart",}
//     },
//     {
//         id: "nasidfd232ni0",
//         slug: "portfolio",
//         title: "Portfolio",
//         short_desc: "string;",
//         tags: ["fullstack", "react"],
//         banner: {url: "https://images.ctfassets.net/n6ipnb4tupgw/3Ycmw46f0JVSemav1eL5xt/a8d5f9cc8205b70c0787722b88e42c8a/Screenshot_2023-09-20_at_13.01.54.png", alt: "portfolio",}
//     },
//     {
//         id: "nasidfd232mo23",
//         slug: "planetfarms",
//         title: "Planetfarms",
//         short_desc: "string;",
//         tags: ["fullstack", "node", "react"],
//         banner: {url: "https://images.ctfassets.net/n6ipnb4tupgw/4uPC8d6Jzb9oBuo5xrP5QJ/4070c7921b7a9c3398eb3fd659241421/planet.jpg", alt: "pigment chart",}
//     },
//     {
//         id: "nasidfd232asie",
//         slug: "abba-the-museum",
//         title: "Abba the museum",
//         short_desc: "string;",
//         tags: ["wordpress"],
//         banner: {url: "https://images.ctfassets.net/n6ipnb4tupgw/3w4R9wrMW1MKqRbv6tA01H/685ea4ebcf2fa26fad0f7f4d7ab2cb4f/abba-full.webp", alt: "pigment chart",}
//     },
//     {
//         id: "nasidfd23290js",
//         slug: "areim",
//         title: "Areim",
//         short_desc: "string;",
//         tags: ["wordpress"],
//         banner: {url: "https://images.ctfassets.net/n6ipnb4tupgw/3F80lluZGysKvMk0O2gWBN/b9c5e28af6a2b7baa7a78be9d6312c8e/areim-full.webp", alt: "pigment chart",}
//     },
//     {
//         id: "nasidfd232opb",
//         slug: "arkoevent",
//         title: "ArkoEvent",
//         short_desc: "string;",
//         tags: ["wordpress"],
//         banner: {url: "https://images.ctfassets.net/n6ipnb4tupgw/6KDwsEbQg72RMELExv9aG9/49d9e254e62122b5192a57edad299eaa/arko-full.webp", alt: "pigment chart",}
//     },
// ]

export default function ProjectSection({data}: {data: {title: string; desc: string;}}) {
    
    return (
        <QueryProvider>
            <ProjectComponent projectData={{title: data.title, desc: data.desc}} />
        </QueryProvider>
    )
   
}

function ProjectComponent({projectData}: {projectData: {title: string; desc: string;}}) {
    const { 
        isPending,
        error,
        data,
        } = useQuery({
        queryKey: ['projects'],
        queryFn: getProjects,
      })


    if(isPending) {
        return <div>Loading...</div>
    }

    if(error) {
        return <div>Error...</div>
    }

    
    
      return (
            <section className="dark:bg-primary-darker">
                <div className="mx-auto max-w-screen-xl py-24 px-4">
                    {projectData.title && <h2 className="dark:text-white text-2xl lg:text-4xl font-bold tracking-wider lg:w-11/12 leading-relaxed">{projectData.title}</h2>}
                    {projectData.desc && <p className="dark:text-gray-400 mt-5 md:text-md">{projectData.desc}</p>}
                    <div className="py-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-tertiary" width={60} height={2} viewBox="0 0 60 2" fill="none">
                            <rect width={60} height={2} fill="currentColor" />
                        </svg>
                    </div>
                
                    
                    <ProjectList data={data} />
                    
    
                    <div className="hidden md:block text-center mt-20">
                        <Link href="/projects" className="py-3 rounded-md px-4 mt-8 tracking-wide border-gray-400 hover:bg-gray-200 dark:text-white border dark:border-secondary text-base dark:hover:bg-secondary">
                            View All Projects
                        </Link>
                    </div>
                </div>
            </section>
      )
}

interface IProject {
    id: string;
    title: string;
    slug: string;
    description: string;
    tags: TagType[];
    banner: {src: string; alt: string;}
} 

function ProjectList({data}: {data: IProject[]}) {

    if(!data || data?.length === 0) {
        return null;
    }
    
    return <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 lg:gap-8 mt-14">
    {
        data?.map((project : IProject, i: number) => {
            return (
                <Link key={project.id} href={`projects/${project.slug}`} className="w-full h-full">
                    <div className="relative border h-full
                    rounded-md shadow-md border-primary dark:border-2 dark:border-primary-lighter dark:bg-primary hover:dark:bg-primary-light hover:bg-gray-50">
                        {project.banner.src 
                            ? <div className="w-full  h-44 relative border-b-primary border-b">
                                <Image 
                                    src={project.banner.src} 
                                    alt={project.banner.alt} 
                                    fill
                                    className=" w-full h-full object-cover" />
                            </div>
                            : <div className="w-full border-b border-b-primary h-44  bg-gradient-to-l dark:from-tertiary dark:to-secondary from-primary to-primary-lighter">
                                <div className="flex items-center justify-center h-full">
                                    <span className="text-white font-bold text-lg font-heading">
                                        SL
                                    </span>
                                </div>
                            </div>
                        }
                        
                        <div className="p-6 flex flex-col justify-between h-48">
                            
                            <div>

                            <h5 className="mb-2 text-2xl font-bold  text-gray-900 dark:text-white tracking-wide">{project.title}</h5>
                            
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{project.description}</p>
                            </div>
                            {
                                project.tags.length > 0 && <div className="">
                                    {
                                        project.tags.map(tag => (
                                            <span 
                                                key={tag.id} 
                                                className="font-normal text-xs capitalize bg-gray-200 px-2 py-1  rounded-sm mr-2">
                                                    {tag.title}
                                            </span>))
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </Link>
            )
        })
    }
    </div>
}
