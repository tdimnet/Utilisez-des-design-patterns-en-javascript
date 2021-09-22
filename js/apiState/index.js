class Context {
    constructor() {
        this._states = [
            new InitialState(),
            new ErrorState(),
            new SuccessState()
        ]
        this.currentState = this._states[0]
    }

    change(status) {
    }

    get state() {
        return this.currentState.state
    }
}

class InitialState {
    constructor() {
        this.state = 'initial'
    }
}

class ErrorState {
    constructor() {
        this.state = 'error'
    }
}

class SuccessState {
    constructor() {
        this.state = 'success'
    }
}
