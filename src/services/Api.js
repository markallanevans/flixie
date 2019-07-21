import config from '../config'

const apiKeyTMDB = config.KEYS.TMDB_API_KEY
const { NOW_PLAYING } = config.TMDB.COLLECTIONS
const genreListUrl = 'https://api.themoviedb.org/3/genre/movie/list'
const apiUrlTMDB = 'https://api.themoviedb.org/3/movie/'
const ENDPOINT = 'https://api.themoviedb.org/'
const GENRE_LIST_QUERY_PATH = '3/genre/'

class ApiProvider {
  async getGenres() {
    const query = `${genreListUrl}?api_key=${apiKeyTMDB}`
    const data = await fetch(query)
    const response = await data.json()
    const genresResults = response.genres
    return genresResults
  }

  async getMoviesOfGenre(genreID) {
    const genreApiCall =
      '/movies?language=en-US&include_adult=false&sort_by=created_at.asc&'
    const genreQueryURI = `${ENDPOINT +
      GENRE_LIST_QUERY_PATH +
      genreID +
      genreApiCall}api_key=${apiKeyTMDB}`
    const data = await fetch(genreQueryURI)
    const response = await data.json()
    const moviesOfGenre = response.results
    return moviesOfGenre
  }

  async getCollection(collection = NOW_PLAYING) {
    const query = `${apiUrlTMDB + collection}?api_key=${apiKeyTMDB}`
    const data = await fetch(query)
    const response = await data.json()
    const fullMovieList = response.results
    return fullMovieList
  }
}

export default ApiProvider
