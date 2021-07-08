class FilterForm {
    constructor(Movies) {
        this.Movies = Movies

        this.$wrapper = document.createElement('div')
        this.$filterFormWrapper = document.querySelector('.filter-form-wrapper')
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
    }

    filterMovies(actor) {
        this.clearMoviesWrapper()

        if (actor === 'all') {
            this.Movies
                .forEach(Movie => {
                    const Template = new MovieCard(Movie)
                    this.$moviesWrapper.appendChild(Template.createMovieCard())
                })
        } else {
            this.Movies
                .filter(Movie => Movie.actor === actor)
                .forEach(Movie => {
                    const Template = new MovieCard(Movie)
                    this.$moviesWrapper.appendChild(Template.createMovieCard())
                })
        }
    }

    onChangeFilter() {
        this.$wrapper
            .querySelector('form')
            .addEventListener('change', e => {
                const actor = e.target.value
                this.filterMovies(actor)
            })
    }

    clearMoviesWrapper() {
        this.$moviesWrapper.innerHTML = ""
    }

    render() {
        const filterForm = `
            <form class="filter-form" action="#" method="POST">
                <label for="filter-select">Choississez votre acteur préféré : </label>
                <select name="filter-select" id="filter-select">
                    <option value="all">Aucun filtre</option>
                    <option value="arnold">Arnold Schwarsenegger</option>
                    <option value="sylvester">Sylvester Stallone</option>
                </select>
            </form>
        `

        this.$wrapper.innerHTML = filterForm
        this.onChangeFilter()

        this.$filterFormWrapper.appendChild(this.$wrapper)
    }
}