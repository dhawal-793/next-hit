import { useRouter } from "next/navigation";


const SidebarLink = ({ setNavOpen, href, name, Icon }) => {
    const router = useRouter()

    const handleLinkClick = () => {
        router.push(href);
        setNavOpen(prev => !prev)
    }

    return (
        <li onClick={handleLinkClick} className={`px-2 py-3 pl-5 cursor-pointer sm:pl-8 w-full flex items-center gap-4 border-y border-b-[#535353] border-t-[#ffffff1a] transition-all duration-300 hover:shadow-[0_0_10px_3px_rgba(34,34,34,1)] hover:border-y-transparent hover:z-20`}>
            <Icon className="w-6 h-6" />
            <div>{name}</div>
        </li>
    )
}
export default SidebarLink