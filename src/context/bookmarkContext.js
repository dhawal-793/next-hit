'use client'

import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { reducer, actions, initialState, getBookMarks } from "./bookmarkRducer";




const BookmarkContext = createContext(initialState)

export const BookmarkContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const contextValue = useMemo(() => {
        return {
            bookmarks: state.bookmarks,
            addBookmark: (bookmark) => {
                console.log("Inside context add clicked")
                dispatch({
                    type: actions.ADD,
                    payload: bookmark
                })
            },
            removeBookmark: (bookmark) => {
                dispatch({
                    type: actions.REMOVE,
                    payload: bookmark
                })
            }
        }
    }, [state, dispatch])

    useEffect(() => {
        const bookmarkJson = getBookMarks()
        if (bookmarkJson !== null) {
            dispatch({
                type: actions.INIT,
                payload: JSON.parse(bookmarkJson),
            });
        }
    }, [])

    useEffect(() => {
        // if (state !== initialState) {
        //     localStorage.setItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY, JSON.stringify(state));
        //     //create and/or set a new localstorage variable called "state"
        //     console.log("inside context if",state.bookmarks)
        // }

    }, [state]);

    return (
        <BookmarkContext.Provider value={contextValue}>
            {children}
        </BookmarkContext.Provider>
    )

}

export const useBookmarkContext = () => useContext(BookmarkContext)