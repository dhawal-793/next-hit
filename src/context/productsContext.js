'use client'

import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { productReducer, actions, productReducerInitialState, getView } from "./productsReducer";

const ProductsContext = createContext(productReducerInitialState)

export const ProductsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, productReducerInitialState)

    const contextValue = useMemo(() => {
        return {
            ...state,
            initialize: () => {
                dispatch({ type: actions.INIT })
            },
            filterProducts: (category, searchTerm) => {
                dispatch({
                    type: actions.FILTER,
                    payload: { category, searchTerm }
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
            },
            updateView: (view) => {
                dispatch({
                    type: actions.VIEW,
                    payload: view,
                });
            }
        }
    }, [state, dispatch])


    useEffect(() => {
        const view = getView()
        if (view !== null) {
            dispatch({
                type: actions.VIEW,
                payload: view,
            });
        }
    }, []);

    return (
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
    )

}

export const useProductsContext = () => useContext(ProductsContext)