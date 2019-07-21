import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MovieCard from './MovieCard'

const posterBaseUrl = 'https://image.tmdb.org/t/p/'
const posterSize = 'w300'
const fullResUrl = `${posterBaseUrl}original`

const styles = {
  wrapper: {
    minHeight: '300px',
    maxWidth: '300px',
    marginTop: '50px',
  },
  header: {
    color: 'white',
  },
}

class MovieList extends Component {
  render() {
    const { movies } = this.props
    if (movies.length > 0) {
      const elements = movies.map(movie => {
        return (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            score={movie.vote_average}
            posterPath={posterBaseUrl + posterSize + movie.poster_path}
            fullResUrl={fullResUrl}
            posterSrc={movie.poster_path}
            releaseDate={movie.release_date}
            overview={movie.overview}
            voteCount={movie.vote_count}
            popularity={Math.floor(movie.popularity)}
            renderLightBox={this.renderLightBox}
          />
        )
      })
      return elements
    }
    return (
      <div style={styles.wrapper}>
        <h1 style={styles.header}>
          There are no movies matching your search! Run away!
        </h1>
      </div>
    )
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      vote_average: PropTypes.number,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
      overview: PropTypes.string,
      vote_count: PropTypes.number,
      popularity: PropTypes.number,
    }),
  ),
}

MovieList.defaultProps = {
  movies: [],
}

export default MovieList
