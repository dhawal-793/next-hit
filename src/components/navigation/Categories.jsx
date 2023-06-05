import ButtonLinks from "../../data/categories"
import { useRouter } from "next/navigation"

const Categories = ({ categoriesOpen, setNavOpen }) => {
    const router = useRouter();
    const handleLink = ({ category, href }) => {
        if (category)
            router.push(category === "all" ? '/' : `/category/${category}`)
        if (href)
            router.push(href)
        setNavOpen(prev => !prev)
    }

    return (
        <ul className={` ${categoriesOpen ? "h-fit" : "h-0 overflow-hidden"} border-l border-l-[#535353] flex flex-col w-full text-xs sm:text-sm md:text-xl`}>
            {ButtonLinks.map((buttonLink) => {
                const Icon = buttonLink.icon[0]
                return (
                    <buton onClick={() => handleLink({ category: buttonLink.category })}
                        className={`px-3 py-3 cursor-pointer w-full flex sm:pl-10 items-center gap-4 border-y border-b-[#535353] border-t-[#ffffff1a] ${buttonLink.id !== 1 && "border-t-0"} transition-all hover:shadow-[0_0_10px_3px_rgba(34,34,34,1)] hover:border-y-transparent hover:z-20`}
                        key={buttonLink.id}
                    >
                        <Icon className="w-5 h-5" />
                        <span className="">{buttonLink.name}</span>
                    </buton>
                )
            })}
        </ul>
    )
}

export default Categories