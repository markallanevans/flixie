import config from '../config'

const apiKeyTMDB = config.KEYS.TMDB_API_KEY
const { NOW_PLAYING } = config.TMDB.COLLECTIONS

const ENDPOINT = 'https://api.themoviedb.org/'
const API_URL_GET_POSTER = 'https://image.tmdb.org/t/p/w300'
const API_URL_GET_MOVIES_BY_GENRE = `${ENDPOINT}/3/genre/{genreId}/movies?language=en-US&include_adult=false&sort_by=created_at.asc&api_key=${apiKeyTMDB}`
const API_URL_GET_GENRES = `${ENDPOINT}3/genre/movie/list?api_key=${apiKeyTMDB}`
const API_URL_GET_COLLECTION = `${ENDPOINT}3/movie/{collection}?api_key=${apiKeyTMDB}`

class ApiProvider {
  async getGenres() {
    const url = API_URL_GET_GENRES

    try {
      const data = await fetch(url)
      const response = await data.json()

      return response.genres
    } catch (e) {
      console.warn(e)
    }
  }

  async getMoviesOfGenre(genreId) {
    const url = API_URL_GET_MOVIES_BY_GENRE.replace('{genreId}', genreId)

    try {
      const data = await fetch(url)
      const response = await data.json()
      const { results } = response
      const movies = this.getMovieModel(results)

      return movies
    } catch (e) {
      console.warn(e)
    }
  }

  async getCollection(collection = NOW_PLAYING) {
    const url = API_URL_GET_COLLECTION.replace('{collection}', collection)

    try {
      const data = await fetch(url)
      const response = await data.json()
      const { results } = response
      const movies = this.getMovieModel(results)

      return movies
    } catch (e) {
      console.warn(e)
    }
  }

  getMovieModel(results) {
    const movies = []
    for (const movie of results) {
      movies.push({
        id: movie.id,
        title: movie.title,
        voteCount: movie.vote_count,
        popularity: movie.popularity,
        score: movie.vote_average,
        releaseDate: movie.release_date,
        overview: movie.overview,
        posterPath: API_URL_GET_POSTER + movie.poster_path,
      })
    }

    return movies
  }
}

export default ApiProvider
