'use client'
import ToolContainer from "@/components/card/ToolContainer";
import { useProductsContext } from "@/context/productsContext";


export default function Home() {
    const { products } = useProductsContext()

    return (
        <ToolContainer productsData={products} />
    )
}
