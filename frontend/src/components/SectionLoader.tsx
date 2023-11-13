export default function SectionLoader({id} : {id?: string}) {
  return (
    <section id={id || ''} className="dark:bg-primary-darker min-h-[110vh]">
        <div className="max-w-screen-xl mx-auto px-4 animate-pulse">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20 py-24 animate-pulse">
                <div
                    className="bg-gray-400 w-full h-48"
                    >
                </div>
                <div className="bg-gray-400 w-full h-48">
                </div>
            </div>
        </div>
    </section>
  )
}
