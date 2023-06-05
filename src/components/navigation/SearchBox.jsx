
'use-client'

import products from "@/DB/product.json"
import { useRouter } from 'next/navigation';
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
            <form className="relative h-6 w-36 xs:w-48 sm:w-72 xs:h-8 sm:h-9 md:h-11 " onSubmit={handleSearch}>
                <input
                    type="text"
                    className="absolute inset-0 pl-1 pr-5 text-xs rounded-full outline-none peer xs:text-sm md:text-base bg-dark-primary text-light-primary xs:pl-3 sm:px-5 sm:"
                    placeholder="search for the tools..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {filtered.length > 0 && <ul className="absolute hidden overflow-auto peer-focus:block bg-dark-primary max-h-52 top-8 sm:top-14 w-36 xs:w-48 sm:w-72">
                    {filtered.map(({ productName }) => {
                        return (
                            <li className="px-5 py-2 border-b cursor-pointer bg-dark-primary border-light-primary/40 text-light-primary hover:bg-dark-secondary"
                                key={productName}
                                onClick={() => handlefilterClick(productName)}>
                                {productName}
                            </li>
                        )
                    })}
                </ul>}
                <button type='submit' className="absolute flex items-center justify-center text-lg font-bold -translate-y-1/2 right-2 top-1/2 bg-dark-primary text-light-primary sm:text-2xl ">
                    <RiSearchLine className='w-3 h-3 xs:h-5 xs:w-5' />
                </button>
            </form>
        </>
    )
}

export default SearchBox