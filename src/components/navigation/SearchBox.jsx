
'use-client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from 'react'
import { RiSearchLine } from "react-icons/ri"
const SearchBox = () => {

    const [searchTerm, setSearchTerm] = useState("")

    const pathName = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()
    const query = searchParams.get('term') || ""

    const search = (term) => {
        setSearchTerm(term)
        if (term.trim() !== "") {
            router.push(`${pathName}/?term=${term}`)
        }
        else if (term.trim() === "") {
            router.push(pathName)
        }
    }
    const handleSearch = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        setSearchTerm(query)
    }, [])
    
    useEffect(() => {
        setSearchTerm(query)
    }, [pathName])



    return (
        <form className="relative h-6 w-36 xs:w-48 sm:w-72 xs:h-8 sm:h-9 md:h-11 " onSubmit={handleSearch}>
            <input
                type="text"
                className="absolute inset-0 pl-1 pr-5 text-xs rounded-full outline-none peer xs:text-sm md:text-base bg-dark-primary text-light-primary xs:pl-3 sm:px-5 sm:"
                placeholder="search for the tools..."
                value={searchTerm}
                onChange={(e) => search(e.target.value)}
            />
            <button type='submit' className="absolute flex items-center justify-center text-lg font-bold -translate-y-1/2 right-3 top-1/2 bg-dark-primary text-light-primary sm:text-2xl ">
                <RiSearchLine className='w-3 h-3 xs:h-5 xs:w-5' />
            </button>
        </form>
    )
}

export default SearchBox