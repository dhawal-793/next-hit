'use client'

import ToolContainer from "@/components/card/ToolContainer"
import { useEffect, useState } from "react"
import { useBookmarkContext } from "@/context/bookmarkContext"
import NoDataFound from "@/components/NoDataFound"
import { useSearchParams } from "next/navigation"
import { searchProducts } from "@/utils/search_sort"
import FullPageContainer from "@/components/FullPageContainer"


const Bookmarks = () => {
  const { bookmarks } = useBookmarkContext()
  const searchParams = useSearchParams()
  const term = searchParams.get('term') || ""
  const bookmarkFilteredProducts = searchProducts(bookmarks, term)
  const [bookmarksLoading, setBookmarksLoading] = useState(true)

  useEffect(() => {
    setBookmarksLoading(false)
  }, [])

  useEffect(() => { }, [bookmarks])

  return (
    <>
      {
        bookmarksLoading ? <p className="py-5 text-center ">Loading...</p>
          :
          bookmarkFilteredProducts.length ?
            <ToolContainer data={bookmarkFilteredProducts} />
            :
            <FullPageContainer>
              <NoDataFound image="/images/sad-face.png" description="SORRY, NO BOOKMARKS IN SIGHT!" />
            </FullPageContainer>

      }
    </>
  )
}

export default Bookmarks