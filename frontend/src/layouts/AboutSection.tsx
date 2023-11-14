import Image from "next/image";

interface IAbout {
    title: string,
    img: {src: string; alt: string;},
    detail: {title: string; description: string},
    skills: {id: number; title: string; description: string}[] | []
}

const colors = ['red','blue','green','orange', 'pink', 'indigo' ];

export default function About({data}: {data: IAbout}) {

    if(!data) {
        return null;
    }

    return (
        <section id="about" className="bg-gray-100 dark:bg-primary-dark">
            <div className="py-24 max-w-screen-xl mx-auto px-4">
                {data.title && <h2 className="text-2xl lg:text-4xl font-bold tracking-wider lg:w-11/12 leading-relaxed dark:text-white">
                    {data.title}</h2>}
                <div className="py-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width={60} height={2} className="text-tertiary" viewBox="0 0 60 2" fill="none">
                        <rect width={60} height={2} fill="currentColor" />
                    </svg>
                </div>
                <div className="flex justify-between flex-col md:flex-row w-full mt-12">
                    <div className="w-full md:w-[calc(40%_-_2rem)] xl:w-[calc(40%_-_2rem)] xl:mr-10">
                        <div className="md:flex md:flex-col break-words w-full mb-6 shadow-md rounded-md bg-white border-l-4 border-primary dark:border-2 dark:border-primary-lighter dark:bg-gradient-to-t from-primary to-primary-light">

                            {/* <img alt="author" src="src/assets/img/me.jpg" className="w-full h-[300px] md:h-[450px] object-cover object-top rounded-t-md" /> */}
                            {data.img.src && <Image 
                                className="w-full h-[300px] md:h-[450px] object-cover object-top rounded-tr-md dark:rounded-t-md" 
                                src={data.img.src} alt={data.img.alt} width={460} height={450} />}

                            <blockquote className="relative p-8 mb-4">
                                {data.detail.title && <h4 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                                    {data.detail.title}
                                </h4>}
                                {data.detail.description && <p className="font-normal text-gray-600 dark:text-gray-400">
                                    {data.detail.description}
                                </p>}
                            </blockquote>
                        </div>
                    </div>

                    <div className="w-full md:w-3/5 lg:md-1/2 xl:w-3/5">
                        <div className="flex flex-wrap gap-4 md:-mr-4">
                            {
                                data.skills.length > 0 && data.skills.map((skill, i) => {
                                    return (
                                        <div key={skill.title + skill.id} className="relative flex flex-col w-full md:w-[calc(50%_-_1rem)]">
                                            <div className={`block max-w-sm p-6 bg-white border-l-4 dark:border-2 border-l-${colors[i]} dark:border-primary-lighter rounded-md shadow-md dark:bg-gradient-to-t from-primary to-primary-light`}>
                                                {skill.title && <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                                                    {skill.title}
                                                </h5>}
                                                {skill.description && <p className="font-normal text-gray-600 dark:text-gray-400">
                                                    {skill.description}
                                                </p>}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
