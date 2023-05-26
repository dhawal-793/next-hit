'use client'

import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { RiArrowUpSLine } from "react-icons/ri"

const BackToTopButton = () => {
    const [btnVisiblity, setBtnVisiblity] = useState(false)
    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    useEffect(() => {
        const toggleVisiblity = () => {
            window.pageYOffset > 250 ? setBtnVisiblity(true) : setBtnVisiblity(false);
        }
        window.addEventListener('scroll', toggleVisiblity);
        return () => {
            window.removeEventListener('scroll', toggleVisiblity);
        }
    }, [])


    return (
        <Link onClick={handleScroll} to="Top" smooth duration={500}>
            <div className={` ${!btnVisiblity ? "-translate-y-[100vh]" : "translate-y-0"} fixed z-50 bottom-2 right-2 transition-all delay-100 duration-500 w-10 h-10 rounded-full cursor-pointer flex justify-center items-center text-light-primary bg-dark-primary text-2xl group`}>
                <RiArrowUpSLine className='group-hover:scale-125 duration-500 transition-all' />
            </div>
        </Link>
    )
}

export default BackToTopButton;
