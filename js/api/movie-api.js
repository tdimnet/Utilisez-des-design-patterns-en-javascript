const getMovies = () => fetch('/data/old-movie-data.json')
    .then(res => res.json())
    .then(res => res.data)
    .catch(err => console.log('err', err))
