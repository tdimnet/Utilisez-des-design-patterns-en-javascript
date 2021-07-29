class UserContext {
    constructor() {
        this.states = [new AnonymousUserState(), new UserConnectedState()]
        this.currentState = this.getInitialState()
    }

    getInitialState() {
        const user = new User()
        const [ AnonymousUserState, UserConnectedState ] = this.states

        if (!user.user) {
            return AnonymousUserState
        } else {
            return UserConnectedState
        }
    }

    change(firstName, lastName) {
        const user = new User({
            firstName,
            lastName
        })

        this.currentState = this.states.filter(state => state !== this.currentState)[0]
    }
}

class UserConnectedState {
    constructor() {
        this.isConnected = true
        this.User = new User()
    }

    getUser() {
        return new User()
    }
}

class AnonymousUserState {
    constructor() {
        this.isConnected = false
        this.User = new User()
    }

    getUser() {
        return new User()
    }
}


class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.$modalWrapper = document.querySelector('.modal')
        
        this.moviesApi = new MovieApi('/data/new-movie-data.json')
        this.externalMoviesApi = new MovieApi('/data/external-movie-data.json')

        // Movies
        this.FullMovies = []

        // WishLib Pub/sub
        this.WishlistSubject = new WishlistSubject()
        this.WhishListCounter = new WhishListCounter()

        this.WishlistSubject.subscribe(this.WhishListCounter)

        // UserContext
        this.UserContext = new UserContext()
    }

    async fetchMovies() {
        const moviesData = await this.moviesApi.get()
        const externalMoviesData = await this.externalMoviesApi.get()

        const Movies = moviesData.map(movie => new MoviesFactory(movie, 'newApi'))
        const ExternalMovies = externalMoviesData.map(movie => new MoviesFactory(movie, 'externalApi'))

        this.FullMovies = Movies.concat(ExternalMovies)
    }

    async main() {
        await this.fetchMovies()

        const Form = new FormModal(this.UserContext)
        Form.render()

        const Filter = new FilterForm(this.FullMovies)
        Filter.render()

        const Sorter = new SorterForm(this.FullMovies)
        Sorter.render()

        this.FullMovies.forEach(movie => {
                const Template = movieCardWithPlayer(
                    new MovieCard(movie, this.WishlistSubject)
                )

                this.$moviesWrapper.appendChild(
                    Template.createMovieCard()
                )
        })
    }
}

const app = new App()
app.main()
