"use client";

import Tooltip from './Tooltip'
import { BiSolidDownload } from 'react-icons/bi'
import { MdDarkMode, MdWbSunny } from 'react-icons/md'
import Nav from './Nav'
import { useState } from 'react';
import { useTheme } from '@/providers/ThemeProvider';

export default function NavMenu() {
    const [openModal, setOpenModal] = useState(false);
    const {darkMode, setDarkMode} = useTheme();

  return (
    <>
        <div className="flex items-center">
                <Tooltip>
                    <Tooltip.Header>    
                        <a href="https://www.googleapis.com/drive/v3/files/1EzFnfwgdhzcX6LjcskzDbr4IFTejhRi_?alt=media&key=AIzaSyAA9ERw-9LZVEohRYtCWka_TQc6oXmvcVU&supportsAllDrives=True" download target="_blank" 
                        className="text-white font-medium rounded-md text-lg
                        py-2 px-2.5 mr-1.5 dark:bg-secondary dark:hover:bg-secondary bg-primary
                        block hover:bg-primary-darker transition duration-300 hover:scale-105">
                            <BiSolidDownload />
                        </a>
                    </Tooltip.Header>
                    <Tooltip.Content>
                        Download CV
                    </Tooltip.Content>
                </Tooltip>
                <Tooltip>
                    <Tooltip.Header>    
                        <button onClick={() => setDarkMode(!darkMode)} className="text-white font-medium rounded-md text-lg 
                            py-2 px-2.5 mr-1 md:mr-0 dark:bg-secondary dark:hover:bg-secondary bg-primary hover:bg-primary-darker transition duration-300 hover:scale-105">
                            {darkMode ? <MdWbSunny /> : <MdDarkMode />}
                        </button>
                    </Tooltip.Header>
                    <Tooltip.Content>
                        Change Theme
                    </Tooltip.Content>
                </Tooltip>
                
                <button onClick={() => setOpenModal(!openModal)} data-collapse-toggle="mega-menu" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-md 
                md:hidden hover:bg-primary-dark dark:text-gray-400" aria-controls="mega-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <nav id="mega-menu" className={`w-full items-center justify-between md:hidden ${openModal ? 'block' : 'hidden'} `}>
                <Nav />
            </nav>
    </>
  )
}
