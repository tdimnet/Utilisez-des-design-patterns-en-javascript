function movieCardWithPlayer(movieCard) {
    if (movieCard.movie.actor === 'sylvester') {
        movieCard.$wrapper.addEventListener('click', () => {
            const Player = new PlayerModal(movieCard.movie)
            Player.render()
        })
    }

    return movieCard
}
