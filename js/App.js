class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.moviesApi = new MovieApi('/data/movie-data.json')
    }

    async main() {
        const movies = await this.moviesApi.getMovies()

        movies.forEach(movie => {
            const Template = new MovieCard(movie)
            this.$moviesWrapper.appendChild(Template.createMovieCard())        
        })    
    }
}

const app = new App()
app.main()
