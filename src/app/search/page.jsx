import ToolContainer from "@/components/card/ToolContainer"
import products from "@/DB/products.json"
import { notFound } from "next/navigation"

const Searchpage = ({ searchParams }) => {

  const data = products.filter(
    (el) => el.productName.toLowerCase().includes(searchParams.term)
  )

  if (data.lengt < 1) return notFound()

  return (
    <ToolContainer productsData={data} />
  )
}

export default Searchpage