'use client'

import { createContext, useContext, useMemo, useReducer } from "react";
import { reducer, actions, initialState } from "./productsReducer";



const ProductsContext = createContext(initialState)

export const ProductsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const contextValue = useMemo(() => {
        return {
            ...state,
            searchProducts: (searchTerm) => {
                // console.log("Inside context searchProducts=> ", searchTerm)
                dispatch({
                    type: actions.SEARCH,
                    payload: searchTerm
                })
            },
            sortByAscending: () => {
                dispatch({
                    type: actions.SORT_ASC,
                })
            },
            sortByDescending: () => {
                dispatch({
                    type: actions.SORT_DESC,
                })
            }
        }
    }, [state, dispatch])


    // useEffect(() => {
    //     // if (state !== initialState) {
    //     //     localStorage.setItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY, JSON.stringify(state));
    //     //     //create and/or set a new localstorage variable called "state"
    //     //     console.log("inside context if",state.bookmarks)
    //     // }

    // }, [state]);

    return (
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
    )

}

export const useProductsContext = () => useContext(ProductsContext)