
'use-client'

import products from "../DB/product.json"
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { RiSearchLine } from "react-icons/ri"
const SearchBox = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("")
    const [filtered, setFiltered] = useState([])

    const searchFilter = () => {
        searchTerm.trim() !== "" ? setFiltered(products.filter(
            (el) => el.productName.toLowerCase().includes(searchTerm)
        )) : setFiltered([])
    }
    const handleSearch = (e) => {
        e.preventDefault();
        redirect()
    }

    const handlefilterClick = (productName) => {
        setSearchTerm(productName)
        redirect()
    }
    const redirect = () => {
        const query = searchTerm.trim()
        if (query !== "")
            router.push(`/search?term=${query}`)
    }
    useEffect(() => {
        searchFilter()
    }, [searchTerm])

    return (
        <>
            <form className="relative w-36 xs:w-48 sm:w-72 h-6 xs:h-8 sm:h-9 md:h-11 " onSubmit={handleSearch}>
                <input
                    type="text"
                    className="peer absolute inset-0 rounded-full text-xs xs:text-sm md:text-base bg-dark-primary text-light-primary outline-none pl-1 xs:pl-3 pr-5 sm:px-5 sm:"
                    placeholder="search for the tools..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {filtered.length > 0 && <ul className="hidden peer-focus:block absolute bg-dark-primary max-h-52 overflow-auto top-8 sm:top-14 w-36 xs:w-48 sm:w-72">
                    {filtered.map(({ productName }) => {
                        return (
                            <li className="py-2 px-5 bg-dark-primary border-b border-light-primary/40 text-light-primary cursor-pointer hover:bg-dark-secondary"
                                key={productName}
                                onClick={() => handlefilterClick(productName)}>
                                {productName}
                            </li>
                        )
                    })}
                </ul>}
                <button type='submit' className="absolute right-2 top-1/2 -translate-y-1/2 bg-dark-primary text-light-primary font-bold text-lg sm:text-2xl flex justify-center items-center ">
                    <RiSearchLine className='h-3 xs:h-5 w-3 xs:w-5' />
                </button>
            </form>
        </>
    )
}

export default SearchBox