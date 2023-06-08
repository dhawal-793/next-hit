
import products from "@/DB/product.json"
export const sortAscending = (products) => {
    const SortedData = products.sort((a, b) => {
        const nameA = a.productName.toUpperCase()
        const nameB = b.productName.toUpperCase()
        return nameA < nameB ? -1 : 1
    })
    return SortedData
}
export const sortDescending = (products) => {
    console.log(typeof products)
    const SortedData = products.sort((a, b) => {
        const nameA = a.productName.toUpperCase()
        const nameB = b.productName.toUpperCase()
        return nameA > nameB ? -1 : 1
    })
    return SortedData
}


export const searchProducts = (searchTerm) => {
    // console.log("Inside function searchProducts => ", searchTerm)
    if(searchTerm.trim()==="") return products
    const filteredProducts = products.filter(
        (el) => el.productName.toLowerCase().includes(searchTerm)
    )
    return filteredProducts;
}