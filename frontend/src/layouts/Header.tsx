import Nav from "@/components/Nav";
import Link from "next/link";
import NavMenu from "@/components/NavMenu";



export default function Header() {

  return (    
    <header className="border-b border-gray-400 bg-gray-100 dark:bg-primary">
        <a className="skip-link font-medium text-[16px] px-6 py-2 md:py-3 md:px-8 capitalize bg-secondary" href="/#about">Skip To Content</a>

        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
            <Link href="/" className="flex items-center">
                <span className="self-center text-2xl font-heading font-black whitespace-nowrap dark:text-white">SL</span>
            </Link>

            <nav id="mega-menu" className={`hidden md:items-center md:justify-between w-full md:flex md:w-auto `}>
                <Nav />
            </nav>

            <NavMenu />
        </div>
    </header>
  )
}


