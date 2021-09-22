class ApiAdapter {
   constructor(url) {
       this._url = url
   }
 
   async getMovies() {
       return await ApiV2.getMovies(this._url)
   }
}
