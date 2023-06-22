'use client'

import productsData from "@/DB/products.json"
import { searchProducts, searchSuggestions, sortAscending, sortDescending } from "@/utils/search_sort";


export const getView = () => {
    const view = localStorage.getItem(process.env.NEXT_PUBLIC_VIEW_KEY)
    return view;
}

export const updateView = (view) => {
    localStorage.setItem(process.env.NEXT_PUBLIC_VIEW_KEY, view);
}

export const productReducerInitialState = {
    products: sortAscending(productsData),
    filteredProducts: [],
    suggestions: [],
    view: "card",
    sort: "asc",
};

export const actions = {
    INIT: "REINITIALIZE",
    FILTER: "FILTER_PRODUCTS",
    SORT_ASC: "SORT_ASCENDING",
    SORT_DESC: "SORT_DESCENDING",
    VIEW: "UPDATE_VIEW"
}

export const productReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        // case actions.INIT: {
        //     return { ...state, products: sortAscending(productsData), filteredProducts: sortAscending(productsData) }
        // }
        case actions.FILTER: {
            let newFilteredProducts = state.products;
            if (payload.category !== "" && payload.category !== "all") {
                newFilteredProducts = state.products.filter(product => product.category.toLowerCase() === payload.category)
            }
            const filteredProducts = searchProducts(newFilteredProducts, payload.searchTerm)
            const filteredSuggestions = searchSuggestions(filteredProducts, payload.searchTerm)
            if (state.sort === "asc") {
                const sortedAscendingData = sortAscending(filteredProducts)
                return { ...state, filteredProducts: sortedAscendingData, suggestions: filteredSuggestions }
            }
            else if (state.sort === "desc") {
                const sortedDescendingData = sortDescending(filteredProducts)
                return { ...state, filteredProducts: sortedDescendingData, suggestions: filteredSuggestions }
            }
            const newState = { ...state, filteredProducts: filteredProducts, suggestions: filteredSuggestions }
            return newState
        }
        case actions.SORT_ASC: {
            const sortedAscendingData = sortAscending(state.filteredProducts)
            const newState = { ...state, filteredProducts: sortedAscendingData, sort: "asc" }
            return newState
        }
        case actions.SORT_DESC: {
            const sortedDescendingData = sortDescending(state.filteredProducts)
            const newState = { ...state, filteredProducts: sortedDescendingData, sort: "desc" }
            return newState
        }
        case actions.VIEW: {
            updateView(payload)
            return { ...state, view: payload }
        }

        default: return state
    }
};