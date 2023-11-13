import Link from "next/link";
import CardTags from "./CardTags";
import Image from "next/image";

export interface CardProps {
    id: string;
    title: string;
    tags?: string[];
    short_desc: string;
    link: string;
    banner: {url: string; title: string;}
}

export default function CardList ({data} : {data: CardProps[] | null}) {

    if(!data || data?.length === 0) {
        return( <div className="dark:text-white text-center mt-10">
           <span className="text-3xl font-body">Not Available at moment.</span>
        </div>);
    }

    return (
        <>
            <div className="mx-auto py-10"> 
            {
                data.map(item => {
                    return (
                        <Link href={item.link} key={item.id} className="w-full flex flex-col bg-white border border-gray-200 rounded-md shadow-md md:flex-row dark:border-2  dark:border-primary-lighter dark:bg-gradient-to-t from-primary to-primary-light mb-4 group">
                                <div className=" w-full h-40 md:w-40 rounded-t-md md:rounded-r-none md:rounded-l-md shrink-0 bg-gradient-to-l dark:from-tertiary dark:to-secondary from-primary to-primary-lighter">
                                {
                                    item.banner.url 
                                        ?
                                            <Image src={item.banner.url} alt={item.banner.title} fill className="object-cover object-center w-full h-full rounded-t-md md:rounded-none md:rounded-l-md" />
                                        : (
                                            <div className="flex items-center justify-center h-full">
                                                <span className="text-white font-bold text-lg font-heading">SL</span>
                                            </div>
                                            )
                                }   
                                </div>
                                <div className="p-4 md:p-0 md:pt-4 md:pl-8 group-hover:dark:bg-primary-light group-hover:bg-gray-100">
                                    <CardTags tags={item.tags ?? []} grid={false}/>
                                    
                                    {item.title && <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>}
                                     {item.short_desc && <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 md:pr-10 lg:pr-20"><span>{item.short_desc}</span></p>}  
                                </div>
                        </Link>
                    )
                })
            }
                    
            </div>
        </>
    );
}
