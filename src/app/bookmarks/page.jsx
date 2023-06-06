'use client'

import ToolContainer from "@/components/card/ToolContainer"
import { useEffect, useState } from "react"
import { useBookmarkContext } from "@/context/bookmarkContext"


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
            <p className="text-xl font-semibold text-center">
              Sorry, no BookMarks to Show
            </p>

      }
    </>
  )
}

export default Bookmarks