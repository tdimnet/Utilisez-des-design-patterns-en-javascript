class OldMovie {
    // le paramètre data correspond aux données reçues par l'API
    constructor(data) {
        this._duration = data.duration
        this._picture = data.picture
        this._released_in = data.released_in
        this._synopsis = data.synopsis
        this._title = data.title
    }

    get duration() {
        return this._duration
    }

    // Me retourne une grande version de l'image
    get picture() {
        return `/assets/${this._picture}`
    }

    get released_in() {
        return this._released_in
    }

    get synopsis() {
        return this._synopsis
    }

    // Me retourne sa thumbnail
    get thumbnail() {
        return `/assets/thumbnails/${this._picture}`
    }

    get title() {
        return this._title
    }
}
