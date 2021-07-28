class WhishListCounter {
    constructor() {
        this._count = 0
        this._$wishCount = document.querySelector('.wish-count')
    }

    update(action) {
        if (action === 'INC') {
            this._count += 1
        } else if (action === 'DEC') {
            this._count -= 1
        } else {
            throw "Unknow action"
        }

        this._$wishCount.innerHTML = this._count
    }
}