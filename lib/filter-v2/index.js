class FilterV2 {
    /**
     * 
     * @param {string} actor 
     * @param {array} Movies 
     * @returns 
     */
    static filterByActor(actor, Movies) {
        if (!actor) {
            return Movies
        }

        return Movies.filter(Movie => Movie.actor === actor)
    }
}
