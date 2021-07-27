class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.moviesApi = new MovieApi('/data/data.json')
    }

    async main() {
        const data = await this.moviesApi.getMovies()

        data.forEach(data => {
            // const Template = new TemplateCardFactory(data)
            // this.$moviesWrapper.appendChild(Template.createCard())
        })
    }
}

const app = new App()
app.main()
