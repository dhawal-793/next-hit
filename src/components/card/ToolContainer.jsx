'use client'

import { useState } from "react"
import Card from "./Card"
import List from "./List"
import ViewButtonGroup from "../buttons/ViewButtonGroup"
import FilterButtonGroup from "../buttons/FilterButtonGroup"
import NoDataFound from "../NoDataFound"

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

          <div className={` items-center justify-center w-full gap-4 p-5  ${layout === "card" ? "grid grid-view" : "flex flex-col "}`}>
            {productsData.map((productData, index) => {
              return layout === "card" ? <Card key={index} productData={productData} /> :
                <List key={index} productData={productData} />
            })}
          </div>
        </>
        :
        <NoDataFound image="/images/sad-face-2.png" description="sorry, out toolbox seems empty for this Search term!" />
      }
    </div>
  )
}

export default ToolContainer