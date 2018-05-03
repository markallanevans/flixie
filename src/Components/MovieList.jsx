import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
// import LightBoxCarousel from './LightBoxCarousel';

const posterBaseUrl = 'https://image.tmdb.org/t/p/';
const posterSize= 'w300'
const fullResUrl= posterBaseUrl + 'original'

class MovieList extends Component {
    render() {
        if (this.props.movies.length > 0) {
        const elements = this.props.movies.map(movies => {
            return (
                    <MovieCard
                        key={movies.id}
                        id={movies.id}
                        title={movies.title}
                        score={movies.vote_average}
                        posterPath={posterBaseUrl + posterSize + movies.poster_path }
                        fullResUrl={fullResUrl}
                        posterSrc={movies.poster_path}
                        releaseDate={movies.release_date}
                        overview={movies.overview}
                        voteCount={movies.vote_count}
                        popularity={Math.floor(movies.popularity)}
                        renderLightBox={this.renderLightBox}
                    />
                );
            })
            return elements;
        } else {
            return (
                <div style={{minHeight: '300px', maxWidth: '300px', marginTop: '50px'}}>
                    <h1 style={{color: 'white'}}>There are no movies matching your search! Run away!</h1>
                </div>
            )
        }

    }
}

MovieList.propTypes = {
	movies: PropTypes.array,
};

export default MovieList;