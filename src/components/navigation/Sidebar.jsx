'use client'


import { RiHome4Fill, RiBookmarkFill, RiMenuUnfoldLine, RiMenuFoldLine, RiInformationLine } from "react-icons/ri"
import { IoIosPeople } from "react-icons/io"
import { useState } from "react";
import Categories from "./Categories";
import SidebarLink from "./SidebarLink";

const Sidebar = ({ navOpen = null, setNavOpen = null }) => {

  const [categoriesOpen, setCategoriesOpen] = useState(false)
  const toggleCategories = () => setCategoriesOpen(prev => !prev)

  const sideBarLinks = [
    {
      name: "home",
      href: "/",
      Icon: RiHome4Fill
    },
    {
      name: "categories",
    },
    {
      name: "bookmarks",
      href: "/bookmarks",
      Icon: RiBookmarkFill
    },
    {
      name: "about",
      href: "/about",
      Icon: RiInformationLine
    },
    {
      name: "community",
      href: "/community",
      Icon: IoIosPeople
    }
  ]

  return (
    <nav id="sidebar" className={`fixed left-0 pb-60 top-14 sm:top-[70px] h-[screen] transition-all duration-300 delay-100 ease-in-out ${!navOpen ? "-translate-x-full" : "translate-x-0"} bg-dark-secondary text-light-primary uppercase overflow-auto z-[100]`}>
      <ul className="flex flex-col w-full text-sm sm:text-lg md:text-xl">
        {sideBarLinks.map(({ name, href, Icon }) => {
          return (
            name === "categories" ?
              <CategoriesLink categoriesOpen={categoriesOpen} setNavOpen={setNavOpen} toggleCategories={toggleCategories} />
              :
              <SidebarLink href={href} key={name} name={name} Icon={Icon} setNavOpen={setNavOpen} />

          )
        })}
      </ul>
    </nav >
  )
}

export default Sidebar


const CategoriesLink = ({ toggleCategories, categoriesOpen, setNavOpen }) => {
  return (
    <li onClick={toggleCategories} className={` relative px-2 pl-5 sm:pl-8 py-3 cursor-pointer w-full flex flex-col items-start  border-y border-b-[#535353] border-t-[#ffffff1a] transition-all duration-300 ${!categoriesOpen && "hover:shadow-[0_0_10px_3px_rgba(34,34,34,1)] hover:border-y-transparent hover:z-20"}`}>
      <div className={`${categoriesOpen && "pb-4"} flex gap-3 items-center `}>
        <div className={`relative w-6 h-6 flex items-center`}>
          <RiMenuUnfoldLine className={` absolute transition-all duration-300 ease-out ${categoriesOpen && " rotate-180 opacity-0 "} `} />
          <RiMenuFoldLine className={` absolute transition-all duration-300 ease-out ${!categoriesOpen && " -rotate-180 opacity-0 "} `} />
        </div>
        <div>
          Categories
        </div>
      </div>
      <Categories setNavOpen={setNavOpen} categoriesOpen={categoriesOpen} />
    </li>
  )
}

