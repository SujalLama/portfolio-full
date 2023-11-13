import { FormEvent, useEffect, useRef, useState } from "react";
import { getAllBlogs } from "../api/blog";
import CardList, { CardProps } from "../components/CardList";
import CardGrid from "../components/CardGrid";
import Filter from "../components/Filter";
import { useSearchParams } from "react-router-dom";
import CardLoader from "../components/CardLoader";

export default function Blogs() {
    const [grid, setGrid] = useState(true);
    const searchInput = useRef<HTMLInputElement | null>(null);
    const [searchParams, setSearchParams] = useSearchParams();
    
    const [blogs, setBlogs] = useState<CardProps[] | null>(null);
    
    const catId = searchParams.get('category');
    const searchId = searchParams.get('s');
    const [search, setSearch] = useState(searchId || '');
    const [tab, setTab] = useState(catId || 'all');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async function () {
            setLoading(true);
            const response = await getAllBlogs(tab, search);

            if(!response) {
                setLoading(false);
                return
            }

            if(response.status) {
                setBlogs(response.data as CardProps[]);
            }

            setLoading(false);
        })()
    }, [tab, search])


    async function searchSubmit (e: FormEvent) {
        e.preventDefault()

        if(!searchInput.current) {
            return;
        }

        const searchValue = searchInput.current.value;

        const searchParam =  !searchValue 
                                ? (catId ? `category=${catId}` : ``)
                                : (catId ? `s=${searchValue}&category=${catId}` : `s=${searchValue}`);
        
        setSearchParams(searchParam)
        
        setSearch(searchInput.current.value)
    }


  return (
    <div className="bg-gray-100 dark:bg-primary min-h-screen">
        <div className="mb-4 md:mb-0 w-full mx-auto relative min-h-[20rem]">
            <div className="absolute left-0 top-0 w-full h-full bg-gray-200 bg-primary-lighter dark:bg-primary-dark">
                <div className="max-w-screen-xl mx-auto px-4 h-full flex items-center justify-center flex-col">
                    <h1 className="text-center text-white font-bold text-4xl">Search Blogs</h1>
                    <form className="w-full md:w-2/3 xl:w-1/2 mx-auto mt-8" onSubmit={(e) => searchSubmit(e)}>
                        <div className="flex items-center  flex-col md:flex-row bg-white rounded-lg overflow-hidden p-1 justify-between">
                            <input ref={searchInput} className="w-full md:w-auto mb-2 md:mb-0 text-base flex-grow outline-none p-2" 
                            type="text" placeholder="Search Blogs" />
                            <button className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white text-base rounded-lg px-8 py-2 ">Search</button>
                        </div>
                    </form>
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


