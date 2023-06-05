'use client'

export const initialState = {
    bookmarks: [],
};

export const actions = {
    INIT: "INITIALIZE",
    ADD: "ADD_BOOKMARK",
    REMOVE: "REMOVE_BOOKMARK",
}

export const getBookMarks = () => {
    const bookmarkJson = localStorage.getItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY)
    return bookmarkJson;
}


export const updateBookMarks = (bookmarks) => {
    localStorage.setItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY, JSON.stringify(bookmarks));
}

export const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case actions.INIT: {
            return { ...state, bookmarks: payload }
        }
        case actions.ADD: {
            const newBookmarks = [...state.bookmarks, payload]
            const newState = { ...state, bookmarks: newBookmarks }
            updateBookMarks(newBookmarks)
            return newState
        }
        case actions.REMOVE: {
            const newBookmarks = state.bookmarks.filter((res) => res.productName !== payload.productName)
            const newState = { ...state, bookmarks: newBookmarks }
            updateBookMarks(newBookmarks)
            return newState;
        }
        default: return state
    }
};