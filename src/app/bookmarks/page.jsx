'use client'

import CardContainer from "@/src/components/CardContainer"
import { useEffect, useState } from "react"
import { useBookmarkContext } from "@/src/context/bookmarkContext"


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
            <CardContainer productsData={bookmarks} />
            :
            <p className="text-center text-xl font-semibold">
              Sorry, no BookMarks to Show
            </p>

      }
    </>
  )
}

export default Bookmarks