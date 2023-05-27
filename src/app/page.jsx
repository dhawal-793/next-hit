import CardContainer from "@/src/components/CardContainer";
import productsData from "@/src/DB/product.json"

export default function Home() {
    return (
        <main className="flex items-center justify-center">
            <CardContainer productsData={productsData} />
        </main>
    )
}
