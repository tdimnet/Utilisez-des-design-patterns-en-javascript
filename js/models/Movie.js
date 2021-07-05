class Movie {
    // le paramètre data correspond aux données reçues par l'API
    constructor(data) {
        this._title = data.title
        this._synopsis = data.synopsis
        this._picture = data.picture
        this._duration = data.duration
        this._released_in = data.released_in
    }

    // Me retourne une grande version de l'image
    get picture() {
        return `/assets/${this._picture}`
    }

    // Me retourne sa thumbnail
    get thumbnail() {
        return `/assets/thumbnails/${this._picture}`
    }
}

// Ici, data est
const data = {
    "title": "Predator",
    "synopsis": "Le commando de forces spéciales mené par le major Dutch Schaeffer est engagé par la CIA pour sauver les survivants d’un crash d’hélicoptère au cœur d’une jungle d’Amérique Centrale",
    "picture": "Predator.jpg",
    "duration": "1h47",
    "released_in": 1987
}
