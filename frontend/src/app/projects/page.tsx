import { getTags } from "@/api/tags";
import ProjectsSearch from "@/layouts/ProjectsSearch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'My Projects',
  description: 'This page includes all the information about the projects done by Sujal lama.',
}

export default async function ProjectsPage() {
    const tabs = await getTags();

    if(!tabs) {
        return null;
    }

  return (
    <div className="bg-gray-100 dark:bg-primary min-h-screen">
        <div className="mb-4 md:mb-0 w-full mx-auto relative min-h-[20rem]">
            <div className="absolute left-0 top-0 w-full h-full  bg-primary-lighter dark:bg-primary-dark">
                <div className="max-w-screen-xl mx-auto px-4 h-full flex items-center justify-center flex-col">
                    <h1 className="text-center text-white font-bold text-4xl">All Projects</h1>
                </div>
            </div>
      </div>
      

        <ProjectsSearch data={{tabs: tabs}} />
      
    </div>
  )
}


