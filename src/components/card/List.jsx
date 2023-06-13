'use client'

import { useEffect, useState } from "react";
import { useBookmarkContext } from "@/context/bookmarkContext";
import ToolButtons from "./ToolButtons";
import { BsChevronDown } from "react-icons/bs"


const List = ({ productData }) => {
    const { description, image, link, productName } = productData;
    const { bookmarks } = useBookmarkContext()
    const [showDescription, setShowDescription] = useState(false)

    const toggleShow = () => setShowDescription(prev => !prev)

    useEffect(() => { }, [bookmarks])
    return (
        <article className="relative flex flex-col justify-between w-full border rounded-lg border-dark-primary shadow-card bg-light-primary">
            <div className={`flex items-center justify-between h-24 p-2 hover:bg-[#E8E8E6] cursor-pointer  ${showDescription?"rounded-t-lg":"rounded-lg"}`} onClick={toggleShow}>
                <div className="flex items-center flex-1 w-full gap-3 pl-2">
                    <img src={image} className="object-contain w-16 h-16 rounded-lg sm:h-20 sm:w-20" alt={productName} />
                    <h3 className="text-lg font-semibold first-letter:capitalizew-full md:text-xl lg:text-2xl text-start ">{productName}</h3>
                </div>
                <div className="flex items-center justify-center gap-3 w-fit">
                    <div className="items-center justify-center hidden w-fit sm:flex">
                        <ToolButtons link={link} productData={productData} productName={productName} />
                    </div>
                    <button onClick={toggleShow} className="flex items-center justify-center p-2 hover:scale-125 ">
                        <BsChevronDown className={`${showDescription ? "rotate-180" : "rotate-0"} duration-300 transition-all font-bold`} />
                    </button>
                </div>
            </div>
            {showDescription && <div className="pb-3 transition-all duration-300 ">
                <p className="px-4 py-2 text-xs xs:text-sm sm:text-base first-letter:capitalize">{description}</p>
                <div className="sm:hidden">
                    <ToolButtons link={link} productData={productData} productName={productName} />
                </div>
            </div>}
        </article>
    )
}

export default List