class PlayerModal {
    constructor(movie) {
        this.movie = movie

        this.$wrapper = document.createElement('div')
        this.$wrapper.classList.add('player-wrapper')

        this.$modalWrapper = document.querySelector('.modal')
    }

    onCloseButton() {
        this.$wrapper
            .querySelector('.close-btn')
            .addEventListener('click', () => {
                this.$modalWrapper.classList.remove('modal-on')
                this.$wrapper.innerHTML = ""
            })
    }

    createPlayer() {
        const player = `
            <div class="player">
                <iframe height="600" width="800" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>    
                <button class="close-btn">Fermer la fenêtre<button>
            </div>
        `

        this.$wrapper.innerHTML = player

        this.$modalWrapper.classList.add('modal-on')
        this.$modalWrapper.appendChild(this.$wrapper)

        this.onCloseButton()
    }

    render() {
        this.createPlayer()
    }
}