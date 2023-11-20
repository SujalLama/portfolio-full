import { Dispatch, SetStateAction, useEffect} from "react"
import { useRouter, useSearchParams } from "next/navigation";

export interface ITab {
    id: number;
    name: string;
    slug: string;
}

interface ITabProps {
    tabs: ITab[] | null;
    tab: string;
    setTab: Dispatch<SetStateAction<string>>;
    slug: string;
}

export default function Filter({tabs, tab, setTab, slug} : ITabProps) {

  const router = useRouter()
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
    router.push(`${slug}?${searchParam}`);
  }

  if(!tabs) {
    return null;
  }


  return (
    <div className="mb-4 md:border-b border-gray-500  flex justify-between items-center">
        <ul className="flex flex-wrap -mb-px  font-medium text-center">
            {
                tabs.map((item : any) => {
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
        
    </div>
  )
}
