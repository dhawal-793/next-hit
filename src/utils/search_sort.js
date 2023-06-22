
export const sortAscending = (products) => {
    const SortedData = products.sort((a, b) => {
        const nameA = a.productName.toUpperCase()
        const nameB = b.productName.toUpperCase()
        return nameA < nameB ? -1 : 1
    })
    return SortedData
}
export const sortDescending = (products) => {
    const SortedData = products.sort((a, b) => {
        const nameA = a.productName.toUpperCase()
        const nameB = b.productName.toUpperCase()
        return nameA > nameB ? -1 : 1
    })
    return SortedData
}

function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}

export const searchProducts = (products, searchTerm) => {
    if (searchTerm.trim() === "") return products
    const filteredProducts = products.filter(
        (product) => {
            if (!searchTerm) return true
            const regex = new RegExp(escapeRegExp(searchTerm.trim()), 'gi')
            var found = product.productName.match(regex) ||
                product.description.match(regex) ||
                product.category.match(regex)
            if (found) return found;
            if (!found) found = found || fuzzySearch(searchTerm, product.productName);
            return (
                found
            )
        }
    )
    return filteredProducts;
}

export const searchSuggestions = (products, searchTerm) => {
    if (searchTerm.trim() === "") return products
    const productNames = products.map(({ productName }) => productName)

    return productNames.filter((productName) => productName.toLowerCase().startsWith(searchTerm.toLowerCase()))
}


function levenshteinDistance(s1, s2) {
    const m = s1.length
    const n = s2.length

    // Create a matrix of size (m+1) x (n+1)
    const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0))

    // Initialize the first row and column
    for (let i = 0; i <= m; i++) {
        dp[i][0] = 0
    }

    for (let j = 0; j <= n; j++) {
        dp[0][j] = 0
    }

    // Calculate the Levenshtein distance
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return Math.max(m, n) - dp[m][n]
}

export default function fuzzySearch(searchTerm, target) {
    searchTerm = searchTerm.toLowerCase()
    target = target.toLowerCase()

    const distance = levenshteinDistance(searchTerm, target)

    const similarity = 1 - distance / Math.max(searchTerm.length, target.length)
    return similarity > 0.5 // Adjust the similarity threshold as needed
}
