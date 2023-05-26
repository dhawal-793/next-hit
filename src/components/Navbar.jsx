'use client'

import { useState } from 'react';
import { RiCloseLine, RiMenuFill, RiSearchLine } from 'react-icons/ri';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Sidebar from './Sidebar';


const Navbar = () => {
    const router = useRouter();
    const [navOpen, setNavOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    const handleNavClick = () => {
        setNavOpen(prev => !prev);
    }
    const handleSearch = (e) => {
        e.preventDefault();
        const query = searchTerm.trim()
        if (query !== "")
            router.push(`/search?term=${query}`)
    }

    return (
        <>
            <nav name="Top" className='h-14 sm:h-[70px] px-2 sm:px-5 flex items-center justify-between border-b-2 border-dark-primary bg-light-primary sticky top-0 z-[999]'>
                <div className='flex text-base xs:text-xl sm:text-2xl md:text-3xl font-bold uppercase space-x-1 sm:space-x-5'>
                    <div>
                        <button className="w-6 h-6 xs:h-8 xs:w-8 sm:h-11 sm:w-11 text-dark-primary bg-light-primary border-2 border-[#333] rounded-sm xs:rounded-md cursor-pointer flex items-center justify-center transition-all relative font-bold " onClick={handleNavClick}>
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
                    <form className="relative w-36 xs:w-48 sm:w-72 h-6 xs:h-8 sm:h-11 " onSubmit={handleSearch}>
                        <input
                            type="text"
                            className="absolute inset-0 rounded-full text-xs xs:text-sm md:text-base bg-dark-primary text-light-primary outline-none pl-1 xs:pl-3 pr-5 sm:px-5 sm:"
                            placeholder="search for the tools..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type='submit' className="absolute right-2 top-1/2 -translate-y-1/2 bg-dark-primary text-light-primary font-bold text-lg sm:text-2xl flex justify-center items-center ">
                            <RiSearchLine className='h-3 xs:h-5 w-3 xs:w-5' />
                        </button>
                    </form>
                </div>
            </nav>
            <Sidebar navOpen={navOpen} />    
        </>
    )
}

export default Navbar;