class RatingSorterApi {
    static async sorter(data, orderBy) {
        console.log("Get from compute")

        if (orderBy === 'ASC') {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = {
                        key: orderBy,
                        data: Array.from(data).sort((a, b) => a.released_in - b.released_in)
                    }

                    resolve(result)

                }, 1000)
            })
        } else if (orderBy === 'DESC') {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = {
                        key: orderBy,
                        data: Array.from(data).sort((a, b) => b.released_in - a.released_in)
                    }

                    resolve(result)
                }, 1000)
            })
        } else {
            throw 'unknow orderBy type'
        }
    }
}
