'use client'

import productsData from "@/DB/products.json"
import { searchProducts, sortAscending, sortDescending } from "@/utils/search_sort";


export const productReducerInitialState = {
    products: sortAscending(productsData),
    searchTerm: "",
    sort: "asc"
};

export const actions = {
    SEARCH: "SEARCH_PRODUCT",
    SORT_ASC: "SORT_ASCENDING",
    SORT_DESC: "SORT_DESCENDING",
}

export const productReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case actions.SEARCH: {
            // console.log("Inside reducer action.SEARCH => ", payload)
            const filteredProducts = searchProducts(payload)
            if (state.sort === "asc") {
                const sortedAscendingData = sortAscending(filteredProducts)
                return { ...state, products: sortedAscendingData }
            }
            else if (state.sort === "desc") {
                const sortedDescendingData = sortDescending(filteredProducts)
                return { ...state, products: sortedDescendingData }
            }
            const newState = { ...state, products: filteredProducts }
            return newState
        }
        case actions.SORT_ASC: {
            const sortedAscendingData = sortAscending(state.products)
            const newState = { ...state, products: sortedAscendingData, sort: "asc" }
            return newState
        }
        case actions.SORT_DESC: {
            const sortedDescendingData = sortDescending(state.products)
            const newState = { ...state, products: sortedDescendingData, sort: "desc" }
            return newState
        }

        default: return state
    }
};