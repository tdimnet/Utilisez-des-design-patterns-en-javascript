class ExternalMovie {
    constructor(data) {
        this._infos = data.infos
        this._medias = data.medias
        this._synopsis = data.synopsis
        this._title_en = data.title_en
        this._title_fr = data.title_fr
    }

    get duration() {
        return this._infos.duration
    }

    get picture() {
        return `/assets/${this._medias.picture}`
    }

    get thumbnail() {
        return `/assets/${this._medias.thumbnail}`
    }

    get released_in() {
        return this._infos.released_in
    }

    get synopsis() {
        return this._synopsis
    }

    get title() {
        return this._title_fr ? this._title_fr : this._title_en
    }
}