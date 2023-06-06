'use client'

import { useState } from "react"
import { MdWindow } from "react-icons/md"
import { TfiMenuAlt } from "react-icons/tfi"
import Card from "./Card"
import List from "./List"

const ToolContainer = ({ productsData }) => {

  const [layout, setLayout] = useState("card")

  const toggleLayout = (type) => setLayout(type)

  return (
    <>
      <div className="flex items-center justify-end w-full gap-4 p-5 pt-8">
        <MdWindow role="button" onClick={() => toggleLayout("card")} className={`w-7 h-7 xs:w-8 xs:h-8 cursor-pointer border-b-4 transition-all duration-200 ${layout === "card" ? "text-dark-primary border-dark-primary" : "text-dark-secondary opacity-70 border-transparent"} hover:text-dark-primary  hover:opacity-100`} />
        <TfiMenuAlt role="button" onClick={() => toggleLayout("list")} className={`w-7 h-7 xs:w-8 xs:h-8 cursor-pointer border-b-4 transition-all duration-200 ${layout === "list" ? "text-dark-primary border-dark-primary" : "text-dark-secondary opacity-70 border-transparent"} hover:text-dark-primary  hover:opacity-100`} />
      </div>

      <div className={`grid items-center justify-center w-full gap-4 p-5  ${layout === "card" && "grid-view"} page-height md:md-page-height`}>
        {productsData.map((productData, index) => {
          return layout === "card" ? <Card key={index} productData={productData} /> :
            <List key={index} productData={productData} />
        })}
      </div>
    </>
  )
}

export default ToolContainer