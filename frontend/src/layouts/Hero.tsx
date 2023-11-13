import { getHero } from "../api/page";
import Image from "next/image";
import Link from "next/link";

interface IHero {
    subtitle: string;
    title: string;
    desc: string;
    banner: {alt: string; url: string};
    link_text: string;
    link_url: string;
}

let data : IHero | null = null;

const heroData = {
    subtitle: "Frontend Developer",
    title: "Namastey! <br /> I'm Sujal Lama.",
    desc: "With three years of experience in the field of frontend development. I have worked with technologies like react, nextjs, wordpress, flutter and node js. I have built both websites and web application.",
    banner: {alt: "banner", url: "https://images.ctfassets.net/n6ipnb4tupgw/7yj1dhHX6PuAD5JXYEA2px/e32199ea39f4f4a58a18ab067b76fb74/hero-photo.jpg"},
    link_text: "Get In Touch",
    link_url: "/#contact",
}
export default async function Hero() {

    if(!heroData) {
        return null;
    }

  return (
    <section className=" dark:bg-primary-darker">
        <div className="max-w-screen-xl mx-auto px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20 py-24">
                <div
                    className="mb-12 md:mb-0"
                    >
                    <div className="flex items-center gap-3 dark:text-white ">
                        <hr className="w-10 bg-tertiary border-tertiary border-2 "/>
                        {heroData.subtitle && <span className="md:text-[18px] font-medium ">
                        {heroData.subtitle}
                        </span>}
                        </div>
                        {heroData.title && <h1 className="dark:text-white text-[40px] lg:text-[45px] xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0 " dangerouslySetInnerHTML={{__html: heroData.title}}>
                        
                        </h1>}
                        {heroData.desc && <p className="dark:text-gray-400 mt-5 md:text-md ">
                        {heroData.desc}
                        </p>}
                        <div className="flex gap-4 mt-10">
                    
                        {heroData.link_url && <Link href={heroData.link_url} className="font-medium text-[16px] flex items-center px-6 py-2 md:py-3 md:px-8 rounded-md capitalize bg-primary dark:bg-secondary  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass ">
                            {heroData.link_text}
                            <span className="animate-ping absolute right-0 top-0 w-3 h-3  rounded-full bg-gradient-to-r from-secondary to-tertiary "></span>
                        </Link>}
                    </div>

                </div>
                <div className="relative mt-10 sm:mt-0">

                    {heroData.banner.url && <Image
                         className="max-w-full" 
                         src={heroData.banner.url} 
                         alt={heroData.banner.alt}
                         width={450}
                         height={550}
                        />}
                </div>
            </div>
        </div>
    </section>
  )
}
