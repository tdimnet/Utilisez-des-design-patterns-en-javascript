class ApiV2 {
    /**
     * 
     * @param {string} url 
     * @returns 
     */
    static async get(url) {
        return fetch(url)
            .then(res => res.json())
            .then(res => ApiV2._handleSuccess(res))
            .catch(err => ApiV2._handleError(err))
    }

    static _handleSuccess(res) {
        return res.data
    }

    static _handleError(err) {
        console.log("Oh no, something went wrong", err)
    }
}