import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MovieCard from './MovieCard'

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
        return <MovieCard key={movie.id} id={movie.id} movie={movie} />
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
