class Form {
    constructor() {
        this.$wrapper = document.createElement('div')
        this.$modalWrapper = document.querySelector('.modal')
    }

    onSubmitForm() {
        this.$wrapper
            .querySelector('form')
            .addEventListener('submit', e => {
                e.preventDefault()

                const firstNameInputValue = this
                    .$wrapper
                    .querySelector('#firstname')
                    .value
                
                const lastNameInputValue = this
                    .$wrapper
                    .querySelector('#lastname')
                    .value

                const user = new User({
                    firstName: firstNameInputValue,
                    lastName: lastNameInputValue
                })

                if (user.data) {
                    this.$modalWrapper.classList.remove('modal-on')
                    this.$modalWrapper.innerHTML = ""
                } 
                    
            })
    }

    shouldDisplayForm() {
        const user = new User()
        return !user.data
    }

    createForm() {
        const form = `
            <form action="#" method="POST">
                <div class="form-group">
                    <label class="form-label" for="firstname">Votre prénom : </label>
                    <input id="firstname" name="firstname" type="text">
                </div>
                <div class="form-group">
                    <label class="form-label" for="lastname">Votre nom : </label>
                    <input id="lastname" name="lastname" type="text">
                </div>
                <button class="submit-btn" type="submit">Valider</button>
            </form>
        `
        this.$wrapper.innerHTML = form

        this.$modalWrapper.classList.add('modal-on')
        this.$modalWrapper.appendChild(this.$wrapper)   
    }

    render() {
        if (this.shouldDisplayForm()) {
            this.createForm()
            this.onSubmitForm()
        }
    }
}
