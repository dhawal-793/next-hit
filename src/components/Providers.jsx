import { BookmarkContextProvider } from '@/context/bookmarkContext'
import { ProductsContextProvider } from '@/context/productsContext'


const Providers = ({ children }) => {
    return (
        <ProductsContextProvider>
            <BookmarkContextProvider>
                {children}
            </BookmarkContextProvider>
        </ProductsContextProvider>
    )
}

export default Providers