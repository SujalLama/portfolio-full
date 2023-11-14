import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { getTags } from "../api/tags";
import {FaThList} from "react-icons/fa"
import {IoGrid} from "react-icons/io5"
import { useRouter, useSearchParams } from "next/navigation";

export interface ITab {
    name: string;
    slug: string;
}

interface ITabProps {
    tab: string;
    setTab: Dispatch<SetStateAction<string>>;
    grid: boolean;
    setGrid: Dispatch<SetStateAction<boolean>>;
}

const tabsData = [
    {
        name: "react",
        slug: "nidf",
    },
    {
        name: "fullstack",
        slug: "nidfsdf",
    },
    {
        name: "wordpress",
        slug: "nidfasdfsfd",
    },
    {
        name: "next",
        slug: "nidfdniidf",
    },
]

export default function Filter({tab, setTab, grid, setGrid} : ITabProps) {
  const router = useRouter()

  const [tabs, setTabs] = useState<ITab[] | null>(tabsData);
  const searchParams = useSearchParams()!;

  const catId = searchParams.get('category');
  const searchId = searchParams.get('s');


  useEffect(() => {
    if(catId) {
        setTab(catId as string)
    }
  }, [catId, setTab])

  function clickHandler (path : string) {
    const searchParam = searchId ? `s=${searchId}&category=${path}` : `category=${path}`;
    router.push(`/blogs?${searchParam}`);
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
                        <li className="mr-2" key={item.slug}>
                            <button 
                                className={`dark:text-white inline-block capitalize mb-4 md:mb-0 px-2 md:p-4 hover:border-b-2 rounded-t-lg hover:border-secondary
                                ${item.slug === tab ? 'border-b-2 border-secondary' : ''}`}
                                onClick={() => clickHandler(item.slug)}
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
