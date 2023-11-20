import { TagType, formatStringToDate } from "@/api/dataFormatter";
import Image from "next/image";


export interface ISinglePageProps {
  id: number;
  banner: {src: string; alt: string;};
  title: string | null;
  description: string | null;
  content: string | null;
  publishedAt?: string;
  tags: TagType[];
}


export default function SinglePage({data} : {data: ISinglePageProps | null}) {

  if(!data) {
    return (
      <main className="dark:bg-primary min-h-screen">
        <div className="mb-4 md:mb-0 w-full mx-auto relative min-h-[24rem]">
            <div className="absolute left-0 top-0 w-full h-full bg-primary-lighter dark:bg-primary-darker" />
            
            <div className="absolute left-0 top-0 w-full h-full z-20 dark:text-white">
                <div className="max-w-screen-xl mx-auto px-4 flex flex-col h-full justify-end">
                </div>
              </div>
        </div>
        <div className="max-w-screen-xl mx-auto py-24 px-4 dark:text-white">
        </div>
    </main>
    )
  }
  
  const {banner, title, description, content, publishedAt, tags} = data;


  return (
    <main className="bg-gray-100 dark:bg-primary min-h-screen">
      <div className={`w-full h-full z-20 md:min-h-[24rem] text-white  bg-primary-lighter dark:bg-primary-darker ${banner.src ? '' : 'pt-24'} `}>
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col">
          {banner.src 
            ? <div className=" w-full mx-auto my-8 rounded-lg border-gray-600 relative min-h-[24rem] md:min-h-[34rem]">
            <Image src={banner.src} alt={banner.alt} fill priority
          className="object-cover" /> 
            </div>
            :  (<>
              {title &&<h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-screen-md pb-8">
                  {title}
                </h1>}
                {description && <p className="max-w-screen-md text-lg leading-8 pb-8">{description}</p>}
            </>
            )
          }
        </div>
      </div>
      
      <div className={`max-w-screen-xl mx-auto px-4 dark:text-white md:mb-8 mt-24`}>
        {publishedAt && <span className="font-normal capitalize bg-gray-200 px-3 text-sm py-1 mr-3 rounded-sm mb-2 md:mb-0 text-black inline-block">
              <span className="pr-2">Published At:</span> 
              <span className="font-bold">{formatStringToDate(publishedAt)}</span>
            </span>}

        {tags.length > 0 && <span className="font-normal capitalize bg-gray-200 px-3 text-sm py-1 mr-3 rounded-sm mb-2 md:mb-0 text-black inline-block">
              <span className="pr-2">Tags:</span> 
              <span className="font-bold">{
                tags?.map(tag => tag.title)?.join(' , ')
              }</span>
            </span>
            }
      </div>

      {banner.src && (
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col h-full justify-end dark:text-white">
        {title &&<h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-screen-md pt-4 pb-8">
            {title}
          </h1>}
          {description && <p className="max-w-screen-md text-lg leading-8 pb-8">{description}</p>}
        </div>)
      }

      <div className={`max-w-screen-xl mx-auto px-4 dark:text-white ${banner.src ? 'pt-8 pb-24' : 'pt-8 pb-24'}`}>

        {content && <div 
            className="max-w-screen-md prose lg:prose-lg  dark:prose-invert dark:prose-blockquote:before:content-none prose-blockquote:p-8 prose-code:prose-pp-8 prose-p:before:content-none prose-blockquote:bg-primary-lighter prose-blockquote:block  prose-code:before:content-none prose-code:after:content-none" 
            dangerouslySetInnerHTML={{__html: content}} />}
      </div>
    </main>
  )
}
