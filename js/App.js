class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        
        this.oldMoviesApi = new MovieApi('/data/old-movie-data.json')
        this.newMoviesApi = new MovieApi('/data/new-movie-data.json')
    }

    async main() {
        const oldMoviesData = await this.oldMoviesApi.getMovies()
        const newMoviesData = await this.newMoviesApi.getMovies()

        const OldMovies = oldMoviesData
            .map(movie => new MoviesFactory(movie, 'oldApi'))
        const NewMovies = newMoviesData.map(movie => new MoviesFactory(movie, 'newApi'))

        const FullMovies = OldMovies.concat(NewMovies)
        
        FullMovies.forEach(movie => {
                const Template = new MovieCard(movie)
                this.$moviesWrapper.appendChild(
                    Template.createMovieCard()
                )
            })
    }
}

const app = new App()
app.main()
