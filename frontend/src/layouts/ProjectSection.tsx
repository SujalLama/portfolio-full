
import Image from "next/image";
import Link from "next/link";

interface IProject {
    id: string;
    title: string;
    short_desc: string;
    tags: string[];
    banner: {url: string; title: string;}
} 

let data : IProject[] | null = null;

const projects = [
    {
        id: "nasidfd232",
        slug: "",
        title: "",
        short_desc: "string;",
        tags: ["", ""],
        banner: {url: "/string;", alt: "string;",}
    }
]
export default function ProjectSection() {

    if(!projects || projects?.length === 0) {
        return null;
    }

  return (
        <section className="dark:bg-primary-darker">
            <div className="mx-auto max-w-screen-xl py-24 px-4">
                <h2 className="dark:text-white text-2xl lg:text-4xl font-bold tracking-wider lg:w-11/12 leading-relaxed">Projects</h2>
                <div className="py-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-tertiary" width={60} height={2} viewBox="0 0 60 2" fill="none">
                        <rect width={60} height={2} fill="currentColor" />
                    </svg>
                </div>
            
                <div className="gallery pt-12 md:py-12">
                    {
                        projects.map((project, i) => {
                            return (
                                <Link href={`/projects/${project.slug}`} key={project.id} className={`relative group gallery__item gallery__item--${i + 1} overflow-hidden h-40 md:h-auto`}>
                                    {
                                        project.banner.url 
                                            ? <>
                                                <Image src={project.banner.url} alt={project.banner.alt} fill className=" mx-auto h-full object-cover object-center group-hover:scale-125 transition ease-in-out delay-100 duration-300" />
                                                <div className="w-full h-full bg-[rgba(0,0,0,0.6)] dark:bg-[rgba(0,0,0,0.3)] absolute top-0 left-0 "></div>
                                                </>
                                            : <div className="w-full h-full bg-gradient-to-t dark:from-tertiary dark:to-secondary from-primary to-primary-lighter group-hover:bg-gradient-to-b transition ease-in-out delay-100 duration-300"></div>
                                    }
                                    
                                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start p-4">
                                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">{project.title}</h2>
                                        <p className="font-normal text-sm capitalize bg-gray-200 px-2 py-1  rounded-sm">{project.tags.join(' , ')}</p>
                                    </div>
                                    
                                </Link>
                            )
                        })
                    }
                </div>

                <div className="hidden md:block text-center mt-8">
                    <Link href="/projects" className="py-3 rounded-md px-4 mt-8 tracking-wide border-gray-400 hover:bg-gray-200 dark:text-white border dark:border-secondary text-base dark:hover:bg-secondary">
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
  )
}
