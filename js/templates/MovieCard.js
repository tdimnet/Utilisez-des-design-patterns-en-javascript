class MovieCard {
    constructor(movie) {
        this._movie = movie

        this.$wrapper = document.createElement('div')
        this.$wrapper.classList.add('movie-card-wrapper')
    }

    createMovieCard() {
        const movieCard = `
            <div class="movie-thumbnail center">
                <img
                    alt="${this._movie.title}"
                    src="${this._movie.thumbnail}"
                />
            </div>
            <h3 class="fs-16 center">${this._movie.title}</h3>
            <p class="fs-14 center">
                <span>${this._movie.released_in}</span>
                -
                <span>${this._movie.duration}</span>
            </p>
        `
        
        this.$wrapper.innerHTML = movieCard
        return this.$wrapper
    }

    get movie() {
        return this._movie
    }
}
