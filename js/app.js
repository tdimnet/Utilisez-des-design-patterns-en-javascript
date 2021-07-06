class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
    }

    async main() {
        const movies = await getMovies()
        movies.forEach(movie => {
            const Template = new MovieCard(movie)
            this.$moviesWrapper.appendChild(Template.createMovieCard())        
        })    
    }
}

const app = new App()
app.main()
