import { RiHome4Fill, RiBookmarkFill } from "react-icons/ri"
import ButtonLinks from "../data/categories"
import { useRouter } from "next/navigation"

const Sidebar = ({ navOpen = null, setNavOpen = null }) => {
  const router = useRouter();

  const handleLink = ({ category, href }) => {
    if (category)
      router.push(category === "all" ? '/' : `/category/${category}`)

    if (href)
      router.push(href)

    setNavOpen(prev => !prev)
  }
  return (
    <nav id="sidebar" className={`fixed left-0 top-14 sm:top-[70px] h-screen transition-all duration-300 delay-100 ease-in-out ${!navOpen ? "-translate-x-full" : "translate-x-0"} bg-dark-secondary overflow-auto text-light-primary uppercase z-50`}>
      <div className="w-full bg-dark-primary">
        <ul className="flex justify-between p-2 py-4">
          <li>
            <button onClick={() => handleLink({ href: "/" })} className="sidebarLinks"><RiHome4Fill className="text-lg md:text-2xl" />Home</button>
          </li>
          <li>
            <button onClick={() => handleLink({ href: "/bookmarks" })} className="sidebarLinks"><RiBookmarkFill className="text-lg md:text-2xl" />Bookmarks</button>
          </li>
        </ul>
      </div>
      <ul className="flex flex-col w-full text-sm sm:text-lg md:text-xl">
        {ButtonLinks.map((buttonLink) => {
          const Icon = buttonLink.icon[0]
          return (
            <buton onClick={() => handleLink({ category: buttonLink.category })}
              className={`pr-3 py-3 pl-5 cursor-pointer sm:pl-10 w-full flex items-center gap-4 border-y border-b-[#535353] border-t-[#ffffff1a] ${buttonLink.id !== 1 && "border-t-0"} transition-all duration-300 hover:shadow-[0_0_10px_3px_rgba(34,34,34,1)] hover:border-y-transparent hover:z-10`}
              key={buttonLink.id}
            >
              <Icon className="w-5 h-5" />
              <span className="">{buttonLink.name}</span>
            </buton>
          )
        })}
      </ul>
    </nav >
  )
}

export default Sidebar