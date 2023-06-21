'use client'

import { useEffect, useState } from "react"
import Card from "./Card"
import List from "./List"
import ViewButtonGroup from "../buttons/ViewButtonGroup"
import FilterButtonGroup from "../buttons/FilterButtonGroup"
import NoDataFound from "../NoDataFound"
import { usePathname } from "next/navigation"
import { useProductsContext } from "@/context/productsContext"
import Loader from "../Loader"
import FullPageContainer from "../FullPageContainer"

const ITEMS_PER_PAGE = 10

const ToolContainer = ({ data = null }) => {
  const { filteredProducts, view, updateView, sort } = useProductsContext()
  const productsData = data ? data : filteredProducts
  const pathName = usePathname()

  const [visibleData, setVisibleData] = useState([]);
  const [page, setPage] = useState(ITEMS_PER_PAGE)
  const [isLoading, setIsLoading] = useState(true)
  const [isFetchingData, setIsFetchingData] = useState(false)
  const [allDataFetched, setAllDataFetched] = useState(false)


  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 400) {
      setPage((prevPage) => prevPage + ITEMS_PER_PAGE)
    }
  };

  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const handleDebouncedScroll = debounce(handleScroll, 200);

  useEffect(() => {
    window.addEventListener('scroll', handleDebouncedScroll);
    return () => {
      window.removeEventListener('scroll', handleDebouncedScroll);
    };
  }, []);

  useEffect(() => {
    const newData = productsData.slice(0, page);
    if (!isLoading && newData.length === productsData.length) {
      setAllDataFetched(true);
    }
    setIsFetchingData(true);
    setTimeout(() => {
      setVisibleData(newData);
      setIsFetchingData(false);
    }, 500);
  }, [page, productsData, sort]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      window.scrollTo(0, 0)
    }, 500)
  }, [])

  // useEffect(() => {  }, [isFetchingData,allDataFetched])

  return (
    <>
      {isLoading ?
        <FullPageContainer>
          <Loader width="w-12" height="h-12" />
        </FullPageContainer> :
        <div className="flex flex-col items-center justify-center">
          {productsData?.length > 0 ?
            <>
              <div className="flex justify-between w-full p-5 pt-8">
                <ViewButtonGroup layout={view} toggleLayout={(view) => updateView(view)} />
                {pathName !== "/bookmarks" && <FilterButtonGroup />}
              </div>
              <div className={` items-center justify-center w-full gap-4 p-5  ${view === "card" ? "grid-layout" : "flex flex-col "}`}>
                {visibleData.map((productData) => {
                  return view === "card" ? <Card key={productData.productName} productData={productData} /> :
                    <List key={productData.productName} productData={productData} />
                })}
              </div>
              {!allDataFetched && isFetchingData && <Loader />}
            </>

            :
            <FullPageContainer>
              <NoDataFound image="/images/sad-face-2.png" description="sorry, our toolbox seems empty for this Search term!" />
            </FullPageContainer>
          }
        </div>
      }
    </>
  )
}

export default ToolContainer