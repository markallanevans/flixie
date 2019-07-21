import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  listItemStyle: {
    float: 'left',
    maxWidth: '150px',
    border: '1px solid white',
    margin: '2px auto 2px auto',
    padding: '2px 10px',
    color: 'white',
    cursor: 'pointer',
  },
  selectStyle: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    border: '10px solid rgba(255,255,255,0.5)',
  },
}

const GenreList = ({ setGenre, genres = [] }) => (
  <form>
    <select style={styles.selectStyle} onChange={setGenre}>
      {genres.map(genre => {
        const genreName = genre.name
        const genreID = genre.id

        return (
          <option style={styles.listItemStyle} key={genre.id} value={genreID}>
            {genreName}
          </option>
        )
      })}
    </select>
  </form>
)

GenreList.propTypes = {
  setGenre: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
}

export default GenreList
