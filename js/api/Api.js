class Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url, State) {
        this._url = url
        this.State = State
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => {

                this.State.change('success')

                return res.data
            })
            .catch(err => {
                this.State.change('error')
                console.log('an error occurs', err)
            })
    }
}


class MovieApi extends Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url, State) {
        super(url, State)
    }

    async getMovies() {
        return await this.get()
    }
}
