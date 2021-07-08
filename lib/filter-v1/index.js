class FilterV1 {
    /**
     * 
     * @param {array} Movies 
     * @param {string} actor 
     */
    constructor(Movies, actor) {
        this.Movies = Movies
        this.actor = actor
    }

    filterByActor() {
        if (!this.actor) {
            return this.Movies
        }

        const FilteredMovies = []

        for (let i = 0; i < this.Movies.length; i++) {
            if (this.Movies[i].actor === this.actor) {
                FilteredMovies.push(this.Movies[i])
            }
        }

        return FilteredMovies
    }
}
