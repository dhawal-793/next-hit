import Link from "next/link"
import { RiHome4Fill, RiBookmarkFill } from "react-icons/ri"
import ButtonLinks from "../data/categories"



const Sidebar = ({ navOpen }) => {
  return (
    <nav id="sidebar" className={`fixed left-0 top-14 sm:top-[70px] h-screen transition-all duration-300 delay-100 ease-in-out ${!navOpen ? "-translate-x-full" : "translate-x-0"} bg-dark-secondary overflow-auto text-light-primary uppercase z-50`}>
      <div className="w-full bg-dark-primary">
        <ul className="flex justify-between p-2 py-4">
          <li>
            <Link href="/" className="sidebarLinks"><RiHome4Fill className="text-lg md:text-2xl" />Home</Link>
          </li>
          <li>
            <Link href="/bookmarks" className="sidebarLinks"><RiBookmarkFill className="text-lg md:text-2xl" />Bookmarks</Link>
          </li>
        </ul>
      </div>
      <ul className="flex flex-col w-full text-sm sm:text-lg md:text-xl">
        {ButtonLinks.map((buttonLink) => {
          const Icon = buttonLink.icon[0]
          return (
            <Link
              href={`/category/${buttonLink.category}`}
              className={`pr-3 py-3 pl-5 sm:pl-10 w-full flex items-center gap-4 border-y border-b-[#535353] border-t-[#ffffff1a] ${buttonLink.id !== 1 && "border-t-0"} transition-all duration-300 hover:shadow-[0_0_10px_3px_rgba(34,34,34,1)] hover:border-y-transparent hover:z-10`}
              key={buttonLink.id}
            >
              <Icon className="w-5 h-5" />
              <span className="">{buttonLink.name}</span>
            </Link>
          )
        })}
      </ul>
    </nav >
  )
}

export default Sidebar