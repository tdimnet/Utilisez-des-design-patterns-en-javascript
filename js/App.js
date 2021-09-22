class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.ApiState = new Context()

        this.moviesApi = new MovieApi(
            '/data/movie-data.json', this.ApiState
        )
    }

    async main() {
        const movies = await this.moviesApi.getMovies()

        const { state } = this.ApiState

        if (state === 'success') {
            movies.forEach(movie => {
                const Template = new MovieCard(movie)
                this.$moviesWrapper.appendChild(Template.createMovieCard())
            })
        } else if (state === 'error') {
            window.alert('Something went wrong')
        }


    }
}

const app = new App()
app.main()
