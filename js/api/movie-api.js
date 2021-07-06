class Api {
    constructor(url) {
        this._url = url
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.data)
            .catch(err => console.log('an error occurs', err))
    }
}


class MovieApi extends Api {
    constructor(url) {
        super(url)
    }

    async getMovies() {
        return await this.get()
    }
}
