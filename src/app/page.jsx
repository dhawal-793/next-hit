import CardContainer from "../components/CardContainer";
import productsData from "../DB/product.json"

export default function Home() {
    return (
        <main className="flex items-center justify-center">
            <CardContainer productsData={productsData} />
        </main>
    )
}
