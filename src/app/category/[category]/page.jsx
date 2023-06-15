'use client'

import { notFound, useSearchParams } from 'next/navigation'
import ToolContainer from '@/components/card/ToolContainer.jsx'
import categories from '@/data/constants.js'
import { useProductsContext } from '@/context/productsContext'
import { searchProducts } from '@/utils/search_sort'

const CategoryPage = ({ params: { category } }) => {
    if (!categories.includes(category)) { return notFound() }

    const { products } = useProductsContext()
    const searchParams = useSearchParams()
    const term = searchParams.get('term') || ""

    const filteredProducts = category === "all" ? products : products.filter(
        (el) => el.category.toLowerCase() === category
    )

    const searchedFilteredProducts = searchProducts(filteredProducts, term)

    return (
        <ToolContainer productsData={searchedFilteredProducts} />
    )
}

export default CategoryPage