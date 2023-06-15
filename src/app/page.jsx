'use client'
import ToolContainer from "@/components/card/ToolContainer";
import { useProductsContext } from "@/context/productsContext";
import { searchProducts } from "@/utils/search_sort";
import { useSearchParams } from "next/navigation";


export default function Home() {
    const { products } = useProductsContext()
    const searchParams = useSearchParams()
    const term = searchParams.get('term') || ""
    const filteredProducts = searchProducts(products, term)
    return (
        <ToolContainer productsData={filteredProducts} />
    )
}
