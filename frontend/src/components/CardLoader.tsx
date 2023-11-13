
export default function CardLoader({grid = true}: {grid?: boolean}) {

  if(grid) {
    return (
      <div className="md:-mr-4 py-10 ">
        <div className="flex flex-wrap gap-4">
            {
                Array(4).fill(1).map((_, i) => {   
                    return (
                    <div key={i} className="w-full md:w-[calc(50%_-_1rem)] lg:w-[calc(33.33%_-_1rem)] xl:w-[calc(25%_-_1rem)]">
                        <div className="bg-white border border-gray-200 dark:border-primary-lighter rounded-md shadow-md dark:border-2 dark:border-primary-lighter dark:bg-gradient-to-t from-primary to-primary-light animate-pulse">
                            <div className="w-full h-40 bg-gray-400 rounded-t-md"></div>
                            <div className="w-full h-40 bg-gray-300 rounded-b-md">
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    </div>)
  }
  
  return (
    <div className="mx-auto py-10"> 
        {
            Array(4).fill(1).map((_, i) => {
                return (
                    <div key={i} className="w-full flex flex-col bg-white border border-gray-200 rounded-md shadow-md md:flex-row dark:border-2  dark:border-primary-lighter dark:bg-gradient-to-t from-primary to-primary-light mb-4 animate-pulse">
                            <div className=" w-full h-40 md:w-40 rounded-t-md  md:rounded-r-0 md:rounded-l-md shrink-0 bg-gray-400"> 
                        
                            </div>
                            <div className="p-4 md:p-0 md:pt-4 md:pl-8 bg-gray-300 w-full rounded-r-md h-40 md:h-auto">
                            </div>
                    </div>
                )
            })
        }
    </div>
  )
}
