'use client'

import { useEffect } from "react";
import { useBookmarkContext } from "@/context/bookmarkContext";

import ToolButtons from "./ToolButtons";

const Card = ({ productData }) => {
    const { description, image, link, productName } = productData;
    const { bookmarks } = useBookmarkContext()


    useEffect(() => { }, [bookmarks])

    return (
        <article className=" relative mx-auto min-h-[15rem] w-full max-w-[280px] sm:max-w-[350px] md:max-w-[380px]  border border-dark-primary shadow-card bg-light-primary py-3 rounded-3xl hover:shadow-card-hover flex flex-col justify-between">
            <div className="w-full px-2 mb-3 sm:px-4">
                <div className="flex items-center gap-2">
                    <img src={image} className="rounded-lg w-7 xs:w-8 sm:w-10 h-7 xs:h-8 sm:h-10 sm:rounded-xl" alt={productName} />
                    <h3 className="w-full text-lg font-semibold text-start sm:text-2xl sm:font-bold">{productName}</h3>
                </div>
                <div className="mt-3 ml-3 font-semibold sm:text-lg md:text-xl">
                    {description}
                </div>
            </div>
            <ToolButtons link={link} productData={productData} productName={productName} />
        </article>
    )
}

export default Card