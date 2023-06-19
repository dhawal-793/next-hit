
import { notFound } from 'next/navigation'
import ToolContainer from '@/components/card/ToolContainer.jsx'
import categories from '@/data/constants.js'


const CategoryPage = ({ params: { category } }) => {
    if (!categories.includes(category)) { return notFound() }
    return (
        <ToolContainer />
    )
}

export default CategoryPage