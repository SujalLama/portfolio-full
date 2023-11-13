import Image from "next/image";

interface IAbout {
    title: string,
    img: {url: string; title: string;},
    detail: {title: string; desc: string},
    skills: {title: string; desc: string}[] | []
}

let data :  IAbout | null = null;

const colors = ['red','blue','green','orange', 'pink', 'indigo' ];

const aboutData = {
    title: "About",
    img: {url: "https://images.ctfassets.net/n6ipnb4tupgw/1GknRNrxPjOW9UQCBSj8Lb/c8cbd40ec21650fe418b51c4f3a506d3/me-crop.jpeg", alt: "about me"},
    detail: {title: "About Me", desc: "Coding is my passion. I love coding and figuring out optimal solution to a problem. I also get excited when I am learning new things. I am currently exploring AWS."},
    skills: [
        {title: "Education", desc: "I graduated from Lincoln University, Malaysia in BBA in 2019."},
        {title: "Core Skills", desc: "HTML, CSS, Javascript and React are my core skills."},
        {title: "Experience", desc: "I worked in Lunover Digital, Mantra Ideas and Dizitalplug for three years(1 year each). There, I build sites with react, node, nextjs and wordpress."},
        {title: "Other Skills", desc: "In terms of styling, I have worked with SASS and tailwindcss. I have also used dart and php in some projects. I am equally familiar with typescript and nextjs."},
        {title: "Tech Stack", desc: "Though I don't prefer particular stack over other, I am much more familiar with PERN (Postgres, Express, React and Node) stack. I am quite good at javascript and react."},
        {title: "Interests", desc: "I usually spend my day at home reading books or watching movies. But I also like to go out with friends and discover new places."},
    ]
}

export default function About() {

    if(!aboutData) {
        return null;
    }

    return (
        <section id="about" className="bg-gray-100 dark:bg-primary-dark">
            <div className="py-24 max-w-screen-xl mx-auto px-4">
                {aboutData.title && <h2 className="text-2xl lg:text-4xl font-bold tracking-wider lg:w-11/12 leading-relaxed dark:text-white">
                    {aboutData.title}</h2>}
                <div className="py-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width={60} height={2} className="text-tertiary" viewBox="0 0 60 2" fill="none">
                        <rect width={60} height={2} fill="currentColor" />
                    </svg>
                </div>
                <div className="flex justify-between flex-col md:flex-row w-full mt-12">
                    <div className="w-full md:w-[calc(40%_-_2rem)] xl:w-[calc(40%_-_2rem)] xl:mr-10">
                        <div className="md:flex md:flex-col break-words w-full mb-6 shadow-md rounded-md bg-white border-l-4 border-primary dark:border-2 dark:border-primary-lighter dark:bg-gradient-to-t from-primary to-primary-light">

                            {/* <img alt="author" src="src/assets/img/me.jpg" className="w-full h-[300px] md:h-[450px] object-cover object-top rounded-t-md" /> */}
                            {aboutData.img.url && <Image 
                                className="w-full h-[300px] md:h-[450px] object-cover object-top rounded-tr-md dark:rounded-t-md" 
                                src={aboutData.img.url} alt={aboutData.img.alt} width={460} height={450} />}

                            <blockquote className="relative p-8 mb-4">
                                {aboutData.detail.title && <h4 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                                    {aboutData.detail.title}
                                </h4>}
                                {aboutData.detail.desc && <p className="font-normal text-gray-600 dark:text-gray-400">
                                    {aboutData.detail.desc}
                                </p>}
                            </blockquote>
                        </div>
                    </div>

                    <div className="w-full md:w-3/5 lg:md-1/2 xl:w-3/5">
                        <div className="flex flex-wrap gap-4 md:-mr-4">
                            {
                                aboutData.skills.length > 0 && aboutData.skills.map((skill, i) => {
                                    return (
                                        <div key={skill.title} className="relative flex flex-col w-full md:w-[calc(50%_-_1rem)]">
                                            <div className={`block max-w-sm p-6 bg-white border-l-4 dark:border-2 border-l-${colors[i]} dark:border-primary-lighter rounded-md shadow-md dark:bg-gradient-to-t from-primary to-primary-light`}>
                                                {skill.title && <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                                                    {skill.title}
                                                </h5>}
                                                {skill.desc && <p className="font-normal text-gray-600 dark:text-gray-400">
                                                    {skill.desc}
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
