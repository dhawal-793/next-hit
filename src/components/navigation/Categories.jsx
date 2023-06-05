import ButtonLinks from "../../data/categories"
import { useRouter } from "next/navigation"

const Categories = ({ categoriesOpen, setNavOpen, isActive }) => {
    const router = useRouter();
    const handleLink = (e, category) => {
        e.stopPropagation();
        router.push(`/category/${category}`)
        setNavOpen(prev => !prev)
    }


    return (
        <ul className={` ${categoriesOpen ? "h-fit" : "h-0 overflow-hidden"} border-l border-l-[#535353] flex flex-col w-full text-xs sm:text-sm md:text-xl`}>
            {ButtonLinks.map((buttonLink) => {
                const active = isActive(buttonLink.category, true)
                const Icon = buttonLink.icon[0]
                return (
                    <buton onClick={(e) => handleLink(e, buttonLink.category)}
                        className={`px-3 py-3 cursor-pointer w-full flex sm:pl-10 items-center gap-4 border-y border-b-[#535353] border-t-[#ffffff1a] ${buttonLink.id !== 1 && "border-t-0"} transition-all ${active && "shadow-[0_0_10px_3px_rgba(34,34,34,1)] border-y-transparent z-20"} hover:shadow-[0_0_10px_3px_rgba(34,34,34,1)] hover:border-y-transparent hover:z-20`}
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