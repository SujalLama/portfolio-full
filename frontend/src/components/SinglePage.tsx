import ReactMarkdown from "react-markdown";

export interface ISinglePageProps {
  banner: unknown;
  title: string | null;
  desc: string | null;
  content: string | null;
  scroll: boolean;
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
  
  const {banner, title, desc, content, scroll} = data;

  const newBanner = banner as {fields: {title: string, file: {url: string}}};

  return (
    <main className="bg-gray-100 dark:bg-primary min-h-screen">
      <div className={`w-full h-full z-20 md:min-h-[24rem] text-white  bg-primary-lighter dark:bg-primary-darker ${newBanner.fields.file.url ? '' : 'pt-24'} ${scroll ? 'h-[24rem] md:h-[34rem]' : ''}`}>
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col h-full">
          {newBanner.fields.file.url 
            ? <div className={`overflow-hidden w-full md:w-[80%] mx-auto my-8 rounded-lg border-gray-600 ${scroll ? 'group md:hover:cursor-pointer' : ''}`}>
            <img src={newBanner.fields.file.url} alt={newBanner.fields.title}
          className={`${scroll ? "md:group-hover:-translate-y-[82%] md:transition-transform md:duration-[6s]" : '' }`} /> 
            </div>
            :  (<>
              {title &&<h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-screen-md pb-8">
                  {title}
                </h1>}
                {desc && <p className="max-w-screen-md text-lg leading-8 pb-8">{desc}</p>}
            </>
            )
          }
        </div>
      </div>
      
      {newBanner.fields.file.url && (
        <div className="max-w-screen-xl mx-auto px-4 mt-24 flex flex-col h-full justify-end dark:text-white">
        {title &&<h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-screen-md pb-8">
            {title}
          </h1>}
          {desc && <p className="max-w-screen-md text-lg leading-8 pb-8">{desc}</p>}
        </div>)
      }
      <div className={`max-w-screen-xl mx-auto px-4 dark:text-white ${newBanner.fields.file.url ? 'pt-8 pb-24' : 'py-24'}`}>
      
        {content && <div className="max-w-screen-md prose lg:prose-lg  dark:prose-invert dark:prose-blockquote:before:content-none prose-blockquote:p-8 prose-code:prose-pp-8 prose-p:before:content-none prose-blockquote:bg-primary-lighter prose-blockquote:block  prose-code:before:content-none prose-code:after:content-none">
          <ReactMarkdown>
            {content}
          </ReactMarkdown>
        </div>}
      </div>
    </main>
  )
}
