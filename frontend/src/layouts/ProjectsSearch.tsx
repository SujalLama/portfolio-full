"use client";

import { getAllProjects } from "@/api/projects";

import CardGrid from "@/components/CardGrid";
import Filter, { ITab } from "@/components/Filter";
import QueryProvider from "@/providers/QueryProvider";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function  ProjectsSearch({data} : {data: {tabs: ITab[]}}) {
    
  return (
      <QueryProvider>
        <CategorizedProjects categoryFilter={data}/>
      </QueryProvider>
  )
}

function CategorizedProjects ({categoryFilter} : {categoryFilter: {tabs: ITab[]}}) {
    const searchParams = useSearchParams();
    
    
    const catId = searchParams.get('category');
    const [tab, setTab] = useState(catId || 'all');



  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
        <Filter tabs={categoryFilter.tabs} tab={tab} setTab={setTab} slug="/projects" />

         <CardGridProjects tab={tab} />
         
      </div>
  )
}

function CardGridProjects ({tab}:{tab: string;}) {
  const {isPending, isError, data} = useQuery({queryKey: ['projects', tab], queryFn: () => getAllProjects({tag: tab})});

  if(isPending) {
    return <p>Loading...</p>
  }

  if(isError) {
    return <p>Error</p>
  }

  return (
    <CardGrid data={data} />
  )
}

