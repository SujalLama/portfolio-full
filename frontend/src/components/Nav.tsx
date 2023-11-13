"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface IMenu {
    name: string;
    path: string;
}

const menu : IMenu[] = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/#about'
    },
    {
        name: 'Projects',
        path: '/projects'
    },
    {
        name: 'Blogs',
        path: '/blogs'
    },
    {
        name: 'Contact',
        path: '/#contact'
    },
]

export default function Nav() {
    const pathname = usePathname();
    
  return (
    <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
        {
            menu.map(menuItem => {
                return (
                    <li key={menuItem.name}>
                        <Link href={menuItem.path} 
                            className={`block py-2 pl-3 pr-4 text-gray-900 dark:border-b 
                            dark:hover:bg-primary-dark md:hover:bg-transparent dark:md:border-0  md:p-0 dark:text-white 
                            hover:underline md:dark:hover:bg-transparent dark:border-gray-700 ${pathname === '/' ? '' : pathname === menuItem.path ? 'underline' : ''}`}>
                            {menuItem.name}</Link>
                    </li>
                )
            })
        }
    </ul>
  )
}
