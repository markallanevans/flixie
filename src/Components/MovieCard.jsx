import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  cardStyle: {
    padding: '10px',
    margin: '10px',
    maxWidth: '400px',
    height: '100%',
    backgroundColor: 'rgba(49, 49, 66, 0.8)',
    color: '#eeeeee',
    textAlign: 'center'
  },
  captionStyle: {
    color: '#888899',
    height: '150px',
    padding: '10px',
    overflowY: 'scroll',
    textAlign: 'justify'
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
    boxShadow: '0px 4px 16px 0px #111133'
  },
  posterStyle: {
    border: '1px solid #444455',
    boxShadow: '0 0 25px 0 #333355'
  },
  headerStyle: {
    paddingLeft: '16px'
  },
  captionLeft: {
    marginBottom: '8px',
    padding: '8px',
    float: 'left',
    backgroundColor: '#111133'
  },
  captionRight: {
    marginBottom: '8px',
    padding: '8px',
    float: 'right',
    backgroundColor: '#111133'
  },
  overview: {
    marginBottom: '8px',
    padding: '8px',
    clear: 'both'
  }
};

const MovieCard = ({
  id,
  title,
  voteCount,
  popularity,
  score,
  posterPath,
  releaseDate,
  overview
}) => {
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

      <div style={styles.captionStyle}>
        <div style={styles.captionLeft}>
          <strong>Release date: </strong>
          {releaseDate}
        </div>
        <div style={styles.captionRight}>
          <strong>Vote average: </strong>
          {score}
        </div>
        <div style={styles.captionLeft}>
          <strong>Vote Count: </strong>
          {voteCount}
        </div>
        <div style={styles.captionRight}>
          <strong>Popularity: </strong>
          {popularity}
        </div>
        <div style={styles.overview}>{overview}</div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  voteCount: PropTypes.number.isRequired,
  popularity: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  posterPath: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired
};

export default MovieCard;
