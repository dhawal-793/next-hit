'use client'

import { notFound } from 'next/navigation.js'
import ToolContainer from '@/components/card/ToolContainer.jsx'
import categories from '@/data/constants.js'
import { useProductsContext } from '@/context/productsContext'

const CategoryPage = ({ params: { category } }) => {
const {products}=useProductsContext()

    if (!categories.includes(category)) { return notFound() }

    const data = category === "all" ? products : products.filter(
        (el) => el.category.toLowerCase().includes(category)
    )
    return (
        <ToolContainer productsData={data} />
    )
}

export default CategoryPage