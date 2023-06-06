import ToolContainer from "@/components/card/ToolContainer";
import productsData from "@/DB/product.json"

export default function Home() {
    return (
        <ToolContainer productsData={productsData} />

    )
}
