'use client'

import { useState } from 'react';
import { RiCloseLine, RiMenuFill } from 'react-icons/ri';
import Link from 'next/link';
import Sidebar from './Sidebar';
import SearchBox from './SearchBox';


const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)

    return (
        <>
            <nav name="Top" className='h-14 sm:h-[70px] px-2 sm:px-5 flex items-center justify-between border-b-2 border-dark-primary bg-light-primary sticky top-0 z-[999]'>
                <div className='flex text-base xs:text-xl sm:text-2xl md:text-3xl font-bold uppercase space-x-1 sm:space-x-5'>
                    <div>
                        <button className="w-6 h-6 xs:h-8 xs:w-8 sm:h-11 sm:w-11 text-dark-primary bg-light-primary border-2 border-[#333] rounded-sm xs:rounded-md cursor-pointer flex items-center justify-center transition-all relative font-bold " onClick={() => setNavOpen(prev => !prev)}>
                            <RiMenuFill className={`absolute transition-all duration-300 ease-out ${navOpen && "rotate-180 opacity-0"} `} />
                            <RiCloseLine className={` absolute transition-all duration-300 ease-out ${!navOpen && " -rotate-180 opacity-0 "} `} />
                        </button>
                    </div>
                    <div>
                        <h1 className=" flex items-center space-x-2">
                            <Link href="/about">
                                <img className="w-6 h-6 xs:h-8 xs:w-8 sm:h-11 sm:w-11 " src="images/free-logo.png" alt="" />
                            </Link>
                            <Link className="hidden sm:block text-4xl font-bold" href="/about">Free-Hit</Link>
                        </h1>
                    </div>
                </div>
                <div>
                    <SearchBox />
                </div>
            </nav>
            <Sidebar navOpen={navOpen} setNavOpen={setNavOpen} />
        </>
    )
}

export default Navbar;