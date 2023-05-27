import CardContainer from "@/src/components/CardContainer"
import products from "@/src/DB/product.json"
import { notFound } from "next/navigation"

const Searchpage = ({ searchParams }) => {

  const data = products.filter(
    (el) => el.productName.toLowerCase().includes(searchParams.term)
  )

  if (data.lengt < 1) return notFound()

  return (
    <CardContainer productsData={data} />
  )
}

export default Searchpage