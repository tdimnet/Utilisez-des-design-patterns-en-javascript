class FilterV2 {
    /**
     * 
     * @param {string} actor 
     * @param {array} Movies 
     * @returns 
     */
    static async filterByActor(actor, Movies) {
        await new Promise(resolve => setTimeout(resolve, 200))


        if (!actor) {
            return Movies
        }

        return Movies.filter(Movie => Movie.actor === actor)
    }
}
