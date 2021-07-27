class TvShowCard {
    constructor(tvShow) {
        this._tvShow = tvShow
    }

    createCard() {
        const $wrapper = document.createElement('div')
        $wrapper.classList.add('movie-card-wrapper')

        const tvShow = `
            <div class="movie-thumbnail center">
                <img
                    alt="${this._tvShow.title}"
                    src="/assets/thumbnails/${this._tvShow.picture}"
                />
            </div>
            <h3 class="fs-16 center">${this._tvShow.title}</h3>
            <p class="fs-14 center">
                <span>${this._tvShow.released_in}</span>
                <br />
                <span>Durée par épisode : ${this._tvShow.durationPerEpisode}</span>
                <br />
                <span>Nombre de saisons : ${this._tvShow.numberOfSeasons}</span>
            </p>
        `
        
        $wrapper.innerHTML = tvShow
        return $wrapper
    }
}