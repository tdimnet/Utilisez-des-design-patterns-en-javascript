class ProxyRatingSorter {
    constructor() {
        this.cache = []
    }

    async sorter(movies, orderBy) {
        const cachedResult = this.cache.find(elt => elt.key === orderBy)
        if (cachedResult) {
            console.log('get from cache')

            return cachedResult
        }

        const data = await RatingSorterApi.sorter(movies, orderBy)

        this.cache.push(data)
        return data
    }
}
