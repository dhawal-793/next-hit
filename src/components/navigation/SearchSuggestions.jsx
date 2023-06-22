
const SearchSuggestions = ({ suggestions,search }) => {
    return (
        <ul className="absolute z-40 p-2 hidden overflow-auto rounded-md filter-suggestions peer-focus:block bg-dark-primary max-h-[70vh] top-7 xs:top-9 sm:top-10 md:top-12 w-36 xs:w-48 sm:w-72">
            {suggestions.map((productName) => {
                return (
                    <li role="button" className="z-0 px-5 py-2 capitalize rounded-md cursor-pointer bg-dark-primary text-light-primary hover:bg-light-primary/40"
                        key={productName}
                        onMouseDown={() => search(productName)}>
                        {productName}
                    </li>
                )
            })}
        </ul>
    )
}

export default SearchSuggestions