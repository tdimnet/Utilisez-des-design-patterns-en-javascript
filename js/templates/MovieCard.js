class MovieCard {
    constructor(movie, WishCounter) {
        this._movie = movie
        this._WishCounter = WishCounter

        this.$wrapper = document.createElement('div')
        this.$wrapper.classList.add('movie-card-wrapper')
    }

    get movie() {
        return this._movie
    }

    handleWishButton() {
        const that = this
        
        this.$wrapper
            .querySelector('.wish-btn')
            .addEventListener('click', function() {
                if (this.classList.contains('wished')) {
                    this.classList.remove('wished')
                    that._WishCounter.decrement()
                } else {
                    this.classList.add('wished')
                    that._WishCounter.increment()
                }
            })
    }

    createMovieCard() {
        const movieCard = `
            <div class="movie-thumbnail center">
                <img
                    alt="${this._movie.title}"
                    src="${this._movie.thumbnail}"
                />
                <div class="wish-btn">
                    <svg class="heart" viewBox="0 0 241.59736 220.05746">
                        <g transform="translate(-175.32265,-1696.4765)">
                            <path d="m 243.45243,1708.9786 c -26.9341,0.2312 -51.58009,21.4767 -55.08178,48.2939 -3.11346,23.844 7.32949,47.3995 23.96855,64.2142 27.5148,27.8054 61.22631,49.7939 83.44686,82.5473 4.39089,-4.6889 9.27818,-12.0655 14.22742,-17.529 25.22951,-27.8509 58.1653,-48.0133 80.86454,-78.1545 17.17546,-22.8065 19.10279,-58.1138 -0.53802,-80.4051 -18.24975,-20.7125 -51.76012,-25.1712 -74.36972,-9.2543 -8.22594,5.791 -15.27469,13.3707 -19.93251,22.3123 -10.05314,-19.3195 -30.53412,-32.2142 -52.58534,-32.0248 z" />
                        </g>
            </svg>
                </div>
            </div>
            <h3 class="fs-16 center">${this._movie.title}</h3>
            <p class="fs-14 center">
                <span>${this._movie.released_in}</span>
                -
                <span>${this._movie.duration}</span>
            </p>
        `
        
        this.$wrapper.innerHTML = movieCard
        this.handleWishButton()

        return this.$wrapper
    }
}
