const fetchContributers = async () => {

    const rawData = await fetch(
        `https://api.github.com/repos/JasonDsouza212/free-hit/contributors?per_page=100`
    )
    const parsedData = rawData.json()
    return parsedData
}

export default fetchContributers