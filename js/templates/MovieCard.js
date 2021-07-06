class MovieCard {
    constructor(movie) {
        this._movie = movie
    }

    createMovieCard() {
        const $wrapper = document.createElement('div')

        const movieCard = `
            <h3>${this._movie.title}</h3>
            <div class="movie-thumbnail">
                <img
                    alt="${this._movie.title}"
                    src="/assets/thumbnails/${this._movie.picture}"
                />
            </div>
        `
        $wrapper.innerHTML = movieCard
        return $wrapper
    }
}
