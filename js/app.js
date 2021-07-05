const $moviesWrapper = document.querySelector('.movies-wrapper')

const createMovieCard = movie => {
    const $wrapper = document.createElement('div')

    const movieCard = `
        <h3>${movie.title}</h3>
        <div class="movie-thumbnail">
            <img
                alt="${movie.title}"
                src="/assets/thumbnails/${movie.picture}"
            />
        </div>
    `

    $wrapper.innerHTML = movieCard
    $moviesWrapper.appendChild($wrapper)
}

const main = async () => {
    const movies = await getMovies()

    movies.forEach(movie => createMovieCard(movie))
}


main()
