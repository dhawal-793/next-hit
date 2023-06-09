'use client'

import { useState } from "react"
import Card from "./Card"
import List from "./List"
import ViewButtonGroup from "../buttons/ViewButtonGroup"
import FilterButtonGroup from "../buttons/FilterButtonGroup"

const ToolContainer = ({ productsData }) => {

  const [layout, setLayout] = useState("card")

  const toggleLayout = (type) => setLayout(type)

  return (
    <div className="flex flex-col items-center justify-center">

      <div className="flex justify-between w-full p-5 pt-8">
        <FilterButtonGroup />
        <ViewButtonGroup layout={layout} toggleLayout={toggleLayout} />
      </div>

      <div className={`grid items-center justify-center w-full gap-4 p-5  ${layout === "card" && "grid-view"} page-height md:md-page-height`}>
        {productsData.map((productData, index) => {
          return layout === "card" ? <Card key={index} productData={productData} /> :
            <List key={index} productData={productData} />
        })}
      </div>
    </div>
  )
}

export default ToolContainer