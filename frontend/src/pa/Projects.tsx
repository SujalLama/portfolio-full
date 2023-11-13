import { useEffect, useState } from "react";
import { getAllProjects } from "../api/projects";
import CardGrid from "../components/CardGrid";
import CardList, { CardProps } from "../components/CardList";
import Filter from "../components/Filter";
import { useSearchParams } from "react-router-dom";
import CardLoader from "../components/CardLoader";

export default function Projects() {
    const [grid, setGrid] = useState(true);
    const [projects, setProjects] = useState<CardProps[] | null>(null);
    const [loading, setLoading] = useState(false);

    const [searchParams,] = useSearchParams();
    
    const catId = searchParams.get('category');
    const [tab, setTab] = useState(catId || 'all');

    useEffect(() => {
        (async function () {
            setLoading(true);
            const response = await getAllProjects(tab)
            if(!response) {
                setLoading(false);
                return;
            }

            if(response.status) {
                setProjects(response.data as CardProps[]);
            }

            setLoading(false);
        })()
    }, [tab])

    


  return (
    <div className="bg-gray-100 dark:bg-primary min-h-screen">
        <div className="mb-4 md:mb-0 w-full mx-auto relative min-h-[20rem]">
            <div className="absolute left-0 top-0 w-full h-full bg-gray-200 bg-primary-lighter dark:bg-primary-dark">
                <div className="max-w-screen-xl mx-auto px-4 h-full flex items-center justify-center flex-col">
                    <h1 className="text-center text-white font-bold text-4xl capitalize">All Projects</h1>
                </div>
            </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <Filter tab={tab} setTab={setTab} grid={grid} setGrid={setGrid}/>
        {grid 
            ? (loading ? <CardLoader /> : <CardGrid data={projects} />) 
            : (loading ? <CardLoader grid={false} /> : <CardList data={projects} />)}
      </div>
    </div>
  )
}
