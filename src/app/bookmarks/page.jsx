'use client'

import ToolContainer from "@/components/card/ToolContainer"
import { useEffect, useState } from "react"
import { useBookmarkContext } from "@/context/bookmarkContext"
import NoDataFound from "@/components/NoDataFound"


const Bookmarks = () => {
  const { bookmarks } = useBookmarkContext()
  const [bookmarksLoading, setBookmarksLoading] = useState(true)

  useEffect(() => {
    setBookmarksLoading(false)
  }, [])

  useEffect(() => { }, [bookmarks])



  return (
    <>
      {

        bookmarksLoading ? <p>Loading...</p>
          :
          bookmarks.length ?
            <ToolContainer productsData={bookmarks} />
            :
            <NoDataFound image="/images/sad-face.png" description="SORRY, NO BOOKMARKS IN SIGHT!" />

      }
    </>
  )
}

export default Bookmarks