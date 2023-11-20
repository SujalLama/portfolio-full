"use client";

import { TagType } from "@/api/dataFormatter";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ISlider {
    id: number;
    title: string;
    slug: string;
    description: string;
    banner: {src: string; alt: string;};
    tags: TagType[];
}

export default function Slider({data, title, desc} : {data: ISlider[], title: string; desc: string;}) {
    const [slider, setSlider] = useState(0);

    const next = () => {
        setSlider(slider => {
            if(slider != ((data.length - 1) *  -100)) {
                return slider - 100
            }
            return (data.length - 1) * - 100
        });
    }

    const prev = () => {
        setSlider(slider => {
            if(slider !== 0) {
                return slider + 100
            }
            return 0
        })
    }

    if(data.length === 0) {
        return null;
    }

  return (
    <div className="md:flex md:flex-wrap md:items-center">
        <div className="md:w-3/12 lg:w-1/3 w-full pb-6 md:pb-0 md:pr-6">
            <div className="w-full">
                {title && <h2 className="text-2xl lg:text-4xl font-bold tracking-wider lg:w-11/12 leading-relaxed dark:text-white">{title}</h2>}
                {desc && <p className="dark:text-gray-400 mt-5 md:text-md">{desc}</p>}
                <div className="py-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width={60} height={2} className="text-tertiary" viewBox="0 0 60 2" fill="none">
                        <rect width={60} height={2} fill="currentColor" />
                    </svg>
                </div>
                <div className="flex w-full pt-8">
                    <button className="bg-blue-700 hover:bg-blue-800 text-white py-5 px-6 mr-2 disabled:cursor-not-allowed disabled:bg-gray-700" disabled={slider === 0}  onClick={prev}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={26} viewBox="0 0 14 26" fill="none">
                            <path d="M12.5 2L1.5 13L12.5 24" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className="bg-blue-700 hover:bg-blue-800 text-white py-5 px-6 disabled:cursor-not-allowed disabled:bg-gray-700" disabled={slider === ((data.length - 1) * -100)} onClick={next}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={26} viewBox="0 0 14 26" fill="none">
                            <path d="M1.5 24L12.5 13L1.5 2" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div className="md:w-9/12 lg:w-2/3 w-full md:mt-10 lg:mt-0">
            <div className="flex overflow-hidden">
                
                    {
                        data?.map(item => {
                            return (
                                <div
                                    key={item.id}
                                    className="shrink-0 basis-full md:basis-[calc(50%_-_2rem)] md:pr-8 transition-transform ease-in-out delay-50 duration-300"
                                    style={{
                                        transform: `translateX(${slider}%)`,
                                    }}
                                >
                                    <Link href={`blogs/${item.slug}`} className="w-full hover:bg-secondary">
                                        <div className="relative bg-white border border-gray-200 
                                        rounded-md shadow-md dark:border-2 dark:border-primary-lighter dark:bg-gradient-to-t 
                                        from-primary to-primary-light group">
                                            {item.banner.src 
                                                ? <div className="w-full rounded-t-lg h-40 relative">
                                                    <Image 
                                                        src={item.banner.src} 
                                                        alt={item.banner.alt} 
                                                        fill
                                                        className="rounded-t-lg w-full h-full object-cover" />
                                                </div>
                                                : <div className="w-full rounded-t-lg h-40 bg-gradient-to-l dark:from-tertiary dark:to-secondary from-primary to-primary-lighter">
                                                    <div className="flex items-center justify-center h-full">
                                                        <span className="text-white font-bold text-lg font-heading">
                                                            {item.tags.map(tag => tag.title).join(' , ') || "SL"}
                                                        </span>
                                                    </div>
                                                </div>
                                            }
                                            
                                            <div className="p-5 group-hover:dark:bg-primary-light group-hover:bg-gray-200">
                                                
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                                
                                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                                            </div>
                                        </div>
                                    </Link>     
                                </div>
                            )
                        })
                    }
                
            </div>
        </div>
    </div>
  )
}
