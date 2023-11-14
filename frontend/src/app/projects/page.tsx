"use client";

import CardGrid from "@/components/CardGrid";
import CardList, { CardProps } from "@/components/CardList";
import CardLoader from "@/components/CardLoader";
import Filter from "@/components/Filter";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

export default function ProjectsPage() {
    const [grid, setGrid] = useState(true);
    const searchInput = useRef<HTMLInputElement | null>(null);
    const searchParams = useSearchParams();
    
    const [blogs, setBlogs] = useState<CardProps[] | null>(null);
    
    const catId = searchParams.get('category');
    const searchId = searchParams.get('s');
    const [search, setSearch] = useState(searchId || '');
    const [tab, setTab] = useState(catId || 'all');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    // useEffect(() => {
    //     (async function () {
    //         setLoading(true);
    //         const response = await getAllBlogs(tab, search);

    //         if(!response) {
    //             setLoading(false);
    //             return
    //         }

    //         if(response.status) {
    //             setBlogs(response.data as CardProps[]);
    //         }

    //         setLoading(false);
    //     })()
    // }, [tab, search])

    // useEffect(() => {
    //     console.log(searchId);
    //     if(searchId) {
    //         setSearch(searchId)
    //     }
    // }, [searchId])


    function onChangeSearchInput(e: ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
    }

    async function searchSubmit (e: FormEvent) {
        e.preventDefault()

        const searchParam =  !search 
                                ? (catId ? `category=${catId}` : ``)
                                : (catId ? `s=${search}&category=${catId}` : `s=${search}`);
        
        
        router.push(`/blogs?${searchParam}`);
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
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <Filter tab={tab} setTab={setTab} grid={grid} setGrid={setGrid} />

        {grid 
            ? (loading ? <CardLoader /> : <CardGrid data={blogs} />) 
            : (loading ? <CardLoader grid={false} /> : <CardList data={blogs} />)}
      </div>
    </div>
  )
}


