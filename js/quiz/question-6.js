class Book {
    constructor(title, author, genre) {
        this._title = title
        this._author = author
        this._genre = genre
    }
}

const bookWithPrice = () => {}

// J'instancie l'objet Book sans décorateur
// const LesMiserables = new Book('Les Misérables', 'Victor Hugo', 'Drame')

// J'instancie l'objet Book décoré
// const LesTroisMousquetaires = bookWithPrice(new Book('Les Trois Mousquetaires', 'Alexandre Dumas', 'Roman historique'), 17)
