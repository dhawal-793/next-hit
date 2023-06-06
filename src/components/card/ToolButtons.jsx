import { useBookmarkContext } from "@/context/bookmarkContext"
import { usePathname } from "next/navigation"
import Button from "./Button"


const ToolButtons = ({ link, productData }) => {
    const { bookmarks, addBookmark, removeBookmark } = useBookmarkContext()
    const path = usePathname()
    return (
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
    )
}

export default ToolButtons