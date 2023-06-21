import { useBookmarkContext } from "@/context/bookmarkContext"
import { usePathname } from "next/navigation"
import Button from "./Button"


const ToolButtons = ({ link, productData, productName }) => {
    const { bookmarks, addBookmark, removeBookmark } = useBookmarkContext()
    const path = usePathname()

    const handleClick = (e, type) => {
        e.stopPropagation()
        type === "add" ? addBookmark(productData) : removeBookmark(productData)
    }
    return (
        <div className="flex mx-auto gap-x-2 w-fit">
            <a href={link} onClick={(e) => e.stopPropagation()} target="_blank" className="capitalize bg-dark-primary text-light-primary py-2 px-6 rounded-lg m-0.5 cursor-pointer hover:scale-105 inline-block transition-all">
                Visit
            </a>

            {path === "/bookmarks" ? <Button handleClick={(e) => handleClick(e, "remove")} text="Remove" /> :
                bookmarks.some((obj) => obj['productName'] === productName) ?
                    <Button text="Remove" handleClick={(e) => handleClick(e, "remove")} />
                    :
                    <Button text="Bookmark" handleClick={(e) => handleClick(e, "add")} />
            }
        </div>
    )
}

export default ToolButtons