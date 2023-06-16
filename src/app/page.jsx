'use client'
import ToolContainer from "@/components/card/ToolContainer";
import { useProductsContext } from "@/context/productsContext";


export default function Home() {
    const { filteredProducts } = useProductsContext()
    return (
        <ToolContainer productsData={filteredProducts} />
    )
}
