'use client'

import { useEffect, useState } from "react"
import Card from "./Card"
import List from "./List"
import ViewButtonGroup from "../buttons/ViewButtonGroup"
import FilterButtonGroup from "../buttons/FilterButtonGroup"
import NoDataFound from "../NoDataFound"
import { usePathname } from "next/navigation"

const ToolContainer = ({ productsData }) => {
  const pathName = usePathname()

  const [layout, setLayout] = useState("card")

  const toggleLayout = (type) => setLayout(type)

  useEffect(() => {}, [pathName])

  return (
    <div className="flex flex-col items-center justify-center">
      {productsData?.length > 0 ?
        <>
          <div className="flex justify-between w-full p-5 pt-8">
            <ViewButtonGroup layout={layout} toggleLayout={toggleLayout} />
            {pathName !== "/bookmarks" && <FilterButtonGroup />}
          </div>
          <div className={` items-center justify-center w-full gap-4 p-5  ${layout === "card" ? "grid grid-view" : "flex flex-col "}`}>
            {productsData.map((productData) => {
              return layout === "card" ? <Card key={productData.productName} productData={productData} /> :
                <List key={productData.productName} productData={productData} />
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