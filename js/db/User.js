class User {
    constructor(data) {
        if (User.exists) {
            return User.instance
        } else if (data && data.firstName && data.lastName) {
            // Si firstName et lastName sont définis au moment de l'instanciation

            // J'initialise les propriétés firstName et lastName
            this._firstName = data.firstName
            this._lastName = data.lastName

            // Je les sauvegarde en Local Storage
            this.saveToLocalStorage()

            // Je "lock" l'objet
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
        // Vérifie si firstName et lastName existent soit au sein de la classe, soit en LocalStorage
        const firstName = this._firstName || localStorage.getItem('firstName')
        const lastName = this._lastName || localStorage.getItem('lastName')

        // Si oui, alors je réinstancie : on a besoin de ce bout de code une fois que l'application a été quittée.
        if (firstName && lastName) {
            const user = new User({
                firstName,
                lastName
            })
        }

        // Sinon, ça veut dire que la classe n'a pas été instancié.
        if (!firstName && !lastName) {
            return null
        }

        // Ici, je retourne le user
        return {
            firstName: firstName,
            lastName: lastName,
        }   
    }

    saveToLocalStorage() {
        localStorage.setItem('firstName', this._firstName)
        localStorage.setItem('lastName', this._lastName)
    }
}
