class User {
    constructor(data) {
        if (User.exists) {
            return User.instance
        } else if (data && data.firstName && data.lastName) {
            this._firstName = data.firstName
            this._lastName = data.lastName

            User.instance = this
            User.exists = true
            return this
        }
    }

    get firstName() {
        return this._firstName
    }

    get lastName() {
        return this._lastName
    }

    get user() {
        if (!this._firstName && !this._lastName) {
            return null
        }
        
        return {
            firstName: this._firstName,
            lastName: this._lastName,
        }   
    }
}
