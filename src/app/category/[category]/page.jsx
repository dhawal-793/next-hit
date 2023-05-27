import { notFound } from 'next/navigation.js'
import CardContainer from '@/src/components/CardContainer.jsx'
import categories from '@/src/data/constants.js'
import products from "@/src/DB/product.json"

const CategoryPage = ({ params: { category } }) => {

    if (!categories.includes(category)) { return notFound() }

    const data = products.filter(
        (el) => el.category.toLowerCase().includes(category)
    )

    return (
        <CardContainer productsData={data} />
    )
}

export default CategoryPage