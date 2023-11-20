
import Link from "next/link";
import { CardProps } from "./CardList";
import Image from "next/image";


export default function CardGrid ({data} : {data: CardProps[] | null}) {

    if(!data || data?.length === 0) {
        return( <div className="dark:text-white text-center mt-10">
           <span className="text-3xl font-body">Not Available at moment.</span>
        </div>);
    }
    
    return (
        <>
            <div className="md:-mr-4 py-10 ">
                <div className="flex flex-wrap gap-4">
                    {
                        data.map(item => {
                            
                            return (
                            <Link key={item.id} href={item.link} className="w-full h-full md:w-[calc(50%_-_1rem)] lg:w-[calc(33.33%_-_1rem)] xl:w-[calc(25%_-_1rem)]">
                                <div className="relative h-full bg-white border border-gray-200 rounded-md shadow-md dark:border-2 dark:border-primary-lighter dark:bg-gradient-to-t from-primary to-primary-light group">
                                    
                                    {item.banner.src 
                                        ? <div className="w-full rounded-t-lg h-40 relative">
                                            <Image src={item.banner.src} alt={item.banner.alt} fill className="rounded-t-md w-full h-full object-cover" />
                                        </div>
                                        : <div className="w-full rounded-t-md h-40 bg-gradient-to-l dark:from-tertiary dark:to-secondary from-primary to-primary-lighter">
                                            <div className="flex items-center justify-center h-full">
                                                <span className="text-white font-bold text-lg font-heading">
                                                    {item?.tags?.map(tag => tag.title).join(' , ') || "SL"}
                                                </span>
                                            </div>
                                        </div>
                                    }
                            
                                    <div className="p-5 group-hover:dark:bg-primary-light group-hover:bg-gray-100">
                                        
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                        
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                                    </div>
                                </div>
                            </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}
