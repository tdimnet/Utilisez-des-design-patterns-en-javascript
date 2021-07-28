class WishCounter {
    constructor() {
        this.count = 0
        this.observers = []
    }

    increment() {
        this.count += 1

        this.notify({ count: this.count })

    }

    decrement() {
        this.count -= 1

        this.notify({ count: this.count })
    }

    addObserver(observer) {
        this.observers.push(observer)
    }

    notify(data) {
        this.observers.forEach(observer => observer.call(null, data))
    }
}

class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.$modalWrapper = document.querySelector('.modal')
        
        this.moviesApi = new MovieApi('/data/new-movie-data.json')
        this.externalMoviesApi = new MovieApi('/data/external-movie-data.json')

        this._WishCounter = new WishCounter()
        this._WishCounter.addObserver(() => {
            document.querySelector('.wish-count').innerHTML = this._WishCounter.count
        })
    }

    async main() {
        const moviesData = await this.moviesApi.get()
        const externalMoviesData = await this.externalMoviesApi.get()

        const Movies = moviesData.map(movie => new MoviesFactory(movie, 'newApi'))
        const ExternalMovies = externalMoviesData.map(movie => new MoviesFactory(movie, 'externalApi'))

        const FullMovies = Movies.concat(ExternalMovies)

        const Form = new FormModal()
        Form.render()

        const Filter = new FilterForm(FullMovies)
        Filter.render()

        const Sorter = new SorterForm(FullMovies)
        Sorter.render()

        FullMovies.forEach(movie => {
                const Template = movieCardWithPlayer(new MovieCard(movie, this._WishCounter))
                this.$moviesWrapper.appendChild(
                    Template.createMovieCard()
                )
        })
    }
}

const app = new App()
app.main()
