import { useProductsContext } from '@/context/productsContext'
import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai'
import ButtonGroupLayout from './ButtonGroupLayout'
import LayoutButton from './LayoutButton'

const FilterButtonGroup = () => {
    const { sort, sortByAscending, sortByDescending } = useProductsContext()
    return (
        <ButtonGroupLayout>
            <LayoutButton handleClick={sortByAscending} isActive={sort === "asc"} Icon={AiOutlineSortAscending} />
            <LayoutButton handleClick={sortByDescending} isActive={sort === "desc"} Icon={AiOutlineSortDescending} />
        </ButtonGroupLayout>
    )
}

export default FilterButtonGroup