'use client'

import { useState } from 'react';
import { RiCloseLine, RiMenuFill } from 'react-icons/ri';
import Link from 'next/link';
import Sidebar from './Sidebar';
import SearchBox from './SearchBox';
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)
    const url = usePathname()

    const isActive = path => url.split('/').pop() === path
    return (
        <>
            <nav name="Top" className='h-14 sm:h-[70px] px-2 sm:px-5 flex items-center justify-between border-b-2 border-dark-primary bg-light-primary sticky top-0 z-[999]'>
                <div className='flex items-center space-x-1 text-base font-bold uppercase xs:text-xl sm:text-2xl md:text-3xl sm:space-x-5'>
                    <div>
                        <button className="w-6 h-6 xs:h-8 xs:w-8 sm:h-9 sm:w-9 md:w-11 md:h-11  text-dark-primary bg-light-primary border-2 border-[#333] rounded-sm xs:rounded-md cursor-pointer flex items-center justify-center transition-all relative font-bold " onClick={() => setNavOpen(prev => !prev)}>
                            <RiMenuFill className={`absolute transition-all duration-300 ease-out ${navOpen && "rotate-180 opacity-0"} `} />
                            <RiCloseLine className={` absolute transition-all duration-300 ease-out ${!navOpen && " -rotate-180 opacity-0 "} `} />
                        </button>
                    </div>
                    <div>
                        <h1 className="flex items-center space-x-2 ">
                            <Link href="/about">
                                <img className="w-6 h-6 rounded-md xs:h-8 xs:w-8 sm:h-9 sm:w-9 md:w-11 md:h-11" src="images/free-logo.png" alt="" />
                            </Link>
                            <Link className="hidden text-4xl font-bold sm:block md:text-5xl" href="/about">Free-Hit</Link>
                        </h1>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='items-center hidden mr-3 text-lg font-bold xl:flex lg:space-x-4'>
                        <Link href="/" className={`hover:bg-dark-primary hover:text-light-primary rounded-lg px-3 py-1 ${isActive("") && "bg-dark-primary text-light-primary"}`}>
                            Home
                        </Link>
                        <Link href="/bookmarks" className={`hover:bg-dark-primary hover:text-light-primary rounded-lg px-3 py-1 ${isActive("bookmarks") && "bg-dark-primary text-light-primary"}`}>
                            Bookmarks
                        </Link>
                        <Link href="/about" className={`hover:bg-dark-primary hover:text-light-primary rounded-lg px-3 py-1 ${isActive("about") && "bg-dark-primary text-light-primary"}`}>
                            About
                        </Link>
                        <Link href="/community" className={`hover:bg-dark-primary hover:text-light-primary rounded-lg px-3 py-1 ${isActive("community") && "bg-dark-primary text-light-primary"}`}>
                            Community
                        </Link>
                    </div>
                    <SearchBox />
                </div>
            </nav>
            <Sidebar navOpen={navOpen} setNavOpen={setNavOpen} />
        </>
    )
}

export default Navbar;