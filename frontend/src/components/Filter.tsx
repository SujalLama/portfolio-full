import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { getTags } from "../api/tags";
import {FaThList} from "react-icons/fa"
import {IoGrid} from "react-icons/io5"
import { useSearchParams } from "react-router-dom";

export interface ITab {
    name: string;
    id: string;
}

interface ITabProps {
    tab: string;
    setTab: Dispatch<SetStateAction<string>>;
    grid: boolean;
    setGrid: Dispatch<SetStateAction<boolean>>;
}

export default function Filter({tab, setTab, grid, setGrid} : ITabProps) {
  
  const [tabs, setTabs] = useState<ITab[] | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const catId = searchParams.get('category');
  const searchId = searchParams.get('s');

  useEffect(() => {
    (async function () {
        const res = await getTags();
        if(!res) return;

        if(res.status) {
            setTabs(res.data as ITab[]);
        }
    })()
  }, [])

  useEffect(() => {
    if(catId) {
        setTab(catId as string)
    }
  }, [catId, setTab])

  function clickHandler (path : string) {
    const searchParam = searchId ? `s=${searchId}&category=${path}` : `category=${path}`;
    setSearchParams(searchParam)
  }

  if(!tabs) {
    return null;
  }


  return (
    <div className="mb-4 md:border-b border-gray-500  flex justify-between items-center">
        <ul className="flex flex-wrap -mb-px  font-medium text-center">
            {
                tabs.map(item => {
                    return (
                        <li className="mr-2" key={item.id}>
                            <button 
                                className={`dark:text-white inline-block capitalize mb-4 md:mb-0 px-2 md:p-4 hover:border-b-2 rounded-t-lg hover:border-secondary
                                ${item.id === tab ? 'border-b-2 border-secondary' : ''}`}
                                onClick={() => clickHandler(item.id)}
                                >
                                {item.name}
                            </button>
                        </li>
                    )
                })
            }
        </ul>
        <div className="hidden md:flex md:items-center dark:text-white">
            <button className={`${grid ? 'text-secondary' : ''} text-lg mr-4`} onClick={() => setGrid(true)}><IoGrid /></button>
            <button className={`${!grid ? 'text-secondary' : ''} text-lg`} onClick={() => setGrid(false)}><FaThList /></button>
        </div>
    </div>
  )
}
