import Card from "./Card"

const CardContainer = ({ productsData }) => {
  return (
    <div className="p-5 w-full grid grid-view justify-center items-center gap-4 mt-4 page-height md:md-page-height">
      {productsData.map((productData, index) => {
        return <Card key={index} productData={productData} />
      })}
    </div>
  )
}

export default CardContainer