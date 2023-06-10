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

      {productsData.length > 0 ?
        <>

          <div className="flex justify-between w-full p-5 pt-8">
            <FilterButtonGroup />
            <ViewButtonGroup layout={layout} toggleLayout={toggleLayout} />
          </div>

          <div className={`grid items-center justify-center w-full gap-4 p-5  ${layout === "card" && "grid-view"}`}>
            {productsData.map((productData, index) => {
              return layout === "card" ? <Card key={index} productData={productData} /> :
                <List key={index} productData={productData} />
            })}
          </div>
        </>
        :
        <div className="flex flex-col items-center p-12 pb-1 text-center gap-y-5">
          <p className="py-5 text-[2rem] font-bold uppercase ">
            sorry, out toolbox seems empty for this Search term!
          </p>
          <img src="/images/sad-face-2.png" alt="Tools Not Found" className="h-60 w-52"/>
        </div>
      }
    </div>
  )
}

export default ToolContainer