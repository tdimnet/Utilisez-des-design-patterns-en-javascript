const fetchData = () => fetch('/data/data.json')
    .then(res => res.json())
    .catch(e => console.log('error', e))


class Movie {
}


class App {
    async init() {
        const data = await fetchData()
    }
}

const app = new App()
app.init()
