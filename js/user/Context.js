class UserContext {
    constructor() {
        this.states = [new AnonymousUserState(), new UserConnectedState()]
        this.currentState = this.getInitialState()
    }

    getInitialState() {
        const user = new User()
        const [ AnonymousUserState, UserConnectedState ] = this.states

        if (!user.user) {
            return AnonymousUserState
        } else {
            return UserConnectedState
        }
    }

    change(firstName, lastName) {
        const user = new User({
            firstName,
            lastName
        })

        this.currentState = this.states.filter(state => state !== this.currentState)[0]
    }
}