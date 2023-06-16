'use client'

import { notFound } from 'next/navigation'
import ToolContainer from '@/components/card/ToolContainer.jsx'
import categories from '@/data/constants.js'
import { useProductsContext } from '@/context/productsContext'


const CategoryPage = ({ params: { category } }) => {
    if (!categories.includes(category)) { return notFound() }
    const { filteredProducts } = useProductsContext()
    return (
        <ToolContainer productsData={filteredProducts} />
    )
}

export default CategoryPage