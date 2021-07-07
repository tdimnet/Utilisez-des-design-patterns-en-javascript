class User {
    constructor(data) {
        if (User.exists) {
            return User.instance
        } else if (data && data.firstName && data.lastName) {
            this._data = data

            User.instance = this
            User.exists = true
            return this
        }
    }

    get data() {
        return this._data
    }

    set data(newData) {
        this._data = newData 
    }
}
