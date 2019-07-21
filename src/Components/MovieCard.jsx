import React from 'react'
import PropTypes from 'prop-types'
import CaptionDetail from './CaptionDetail'

const styles = {
  cardStyle: {
    padding: '10px',
    margin: '10px',
    maxWidth: '400px',
    height: '100%',
    backgroundColor: 'rgba(49, 49, 66, 0.8)',
    color: '#eeeeee',
    textAlign: 'center',
  },
  captionWrapper: {
    color: '#888899',
    height: '150px',
    padding: '10px',
    overflowY: 'scroll',
    textAlign: 'justify',
  },
  titleStyle: {
    display: 'inline-block',
    width: '108%',
    minHeight: '48px',
    color: '#bbbbcc',
    paddingTop: '8px',
    paddingBottom: '8px',
    marginTop: '-16px',
    marginBottom: '16px',
    marginLeft: '-16px',
    textAlign: 'center',
    borderBottom: '1px solid #444455',
    backgroundColor: '#111133',
    opacity: '0.9',
    boxShadow: '0px 4px 16px 0px #111133',
  },
  posterStyle: {
    border: '1px solid #444455',
    boxShadow: '0 0 25px 0 #333355',
  },
  headerStyle: {
    paddingLeft: '16px',
  },
  overview: {
    marginBottom: '8px',
    padding: '8px',
    clear: 'both',
  },
}

const MovieCard = ({ movie }) => {
  const {
    id,
    title,
    voteCount,
    popularity,
    score,
    releaseDate,
    overview,
    posterPath,
  } = movie

  const roundedPopularity = Math.floor(popularity)
  const captionDetails = [
    { id: 0, title: 'Release Date', content: releaseDate },
    { id: 1, title: 'Vote average', content: score },
    { id: 2, title: 'Vote count', content: voteCount },
    { id: 3, title: 'Popularity', content: roundedPopularity },
  ]

  return (
    <div style={styles.cardStyle} className="border-rounded">
      <div style={styles.titleStyle}>
        <h1 style={styles.headerStyle}>{title}</h1>
      </div>

      <img
        src={posterPath}
        name={id}
        className="border-rounded"
        style={styles.posterStyle}
        alt=""
      />

      <div style={styles.captionWrapper}>
        {captionDetails.map((detail, i) => (
          <CaptionDetail
            title={detail.title}
            content={detail.content}
            key={detail.id}
            left={i % 2 === 0}
          />
        ))}
        <div style={styles.overview}>{overview}</div>
      </div>
    </div>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    voteCount: PropTypes.number.isRequired,
    popularity: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    releaseDate: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    posterPath: PropTypes.string.isRequired,
  }).isRequired,
}

export default MovieCard
