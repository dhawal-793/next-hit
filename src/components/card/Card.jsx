'use client'

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useBookmarkContext } from "@/context/bookmarkContext";
import Button from "./Button";

const Card = ({ productData }) => {
    const { description, image, link, productName } = productData;
    const { bookmarks, addBookmark, removeBookmark } = useBookmarkContext()
    const path = usePathname()

    useEffect(() => { }, [bookmarks])

    return (
        <article className=" relative mx-auto h-56 max-w-[300px] sm:min-w-[350px] md:max-w-sm border border-dark-primary shadow-card bg-light-primary py-2.5 rounded-3xl hover:shadow-card-hover flex flex-col justify-between">
            <div className="w-full px-2 mb-3 sm:px-4">
                <div className="flex items-center gap-2">
                    <img src={image} className="rounded-lg w-7 md:w-10 h-7 md:h-10 md:rounded-xl" alt={productName} />
                    <h3 className="w-full text-lg font-semibold text-start md:text-2xl md:font-bold">{productName}</h3>
                </div>
                <div className="mt-3 font-normal md:font-semibold">
                    {description}
                </div>
            </div>
            <div className="flex pb-3 mx-auto space-x-3 w-fit">
                <a href={link} target="_blank" className="capitalize bg-dark-primary text-light-primary py-2 px-3 sm:px-6 rounded-lg m-0.5 cursor-pointer hover:scale-105 inline-block transition-all">
                    Visit
                </a>

                {path === "/bookmarks" ? <Button handleClick={() => removeBookmark(productData)} text="Remove" /> :
                    bookmarks.some((obj) => obj['productName'] === productName) ?
                        <Button text="Remove" handleClick={() => removeBookmark(productData)} />
                        :
                        <Button text="Bookmark" handleClick={() => addBookmark(productData)} />
                }
            </div>
        </article>
    )
}

export default Card