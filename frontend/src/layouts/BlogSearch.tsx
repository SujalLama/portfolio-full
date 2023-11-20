"use client";

import { getAllBlogs } from "@/api/blogs";
import CardGrid from "@/components/CardGrid";
import Filter, { ITab } from "@/components/Filter";
import QueryProvider from "@/providers/QueryProvider";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function BlogSearch({data}: {data: {tabs: ITab[]}}) {


  return (
    <QueryProvider>
        <CategorizedBlogs data={data} />
    </QueryProvider>
  )
}

function CategorizedBlogs ({data} : {data: {tabs: ITab[]}}) {
    const searchParams = useSearchParams();
    
    const catId = searchParams.get('category');
    const searchId = searchParams.get('s');
    const [search, setSearch] = useState(searchId || '');
    const [formSearch, setFormSearch] = useState(searchId || '');
    const [tab, setTab] = useState(catId || 'all');
    const router = useRouter();

    function onChangeSearchInput(e: ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
    }

    async function searchSubmit (e: FormEvent) {
        e.preventDefault()

        const searchParam =  !search 
                                ? (catId ? `category=${catId}` : ``)
                                : (catId ? `s=${search}&category=${catId}` : `s=${search}`);
        
        setFormSearch(search);
        router.push(`/blogs?${searchParam}`);
    }


  return (
    <div className="bg-gray-100 dark:bg-primary min-h-screen">
        <div className="mb-4 md:mb-0 w-full mx-auto relative min-h-[20rem]">
            <div className="absolute left-0 top-0 w-full h-full  bg-primary-lighter dark:bg-primary-dark">
                <div className="max-w-screen-xl mx-auto px-4 h-full flex items-center justify-center flex-col">
                    <h1 className="text-center text-white font-bold text-4xl">Search Blogs</h1>
                    <form className="w-full md:w-2/3 xl:w-1/2 mx-auto mt-8" onSubmit={(e) => searchSubmit(e)}>
                        <div className="flex items-center  flex-col md:flex-row bg-white rounded-lg overflow-hidden p-1 justify-between">
                            <input value={search} onChange={onChangeSearchInput} className="w-full md:w-auto mb-2 md:mb-0 text-base flex-grow outline-none p-2" 
                            type="text" placeholder="Search Blogs" />
                            <button className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white text-base rounded-lg px-8 py-2 ">Search</button>
                        </div>
                    </form>
                </div>
            </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <Filter tabs={data.tabs} tab={tab} setTab={setTab} slug="/blogs" />
        <CardGridBlogs tab={tab} search={formSearch} />
      </div>
    </div>
  )
}

function CardGridBlogs ({tab, search}:{tab: string; search: string;}) {
  const {isPending, isError, data} = useQuery({
    queryKey: ['projects', tab, search], 
    queryFn: () => getAllBlogs({tag: tab, s: search})
    });

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

