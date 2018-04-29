import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const posterBaseUrl = 'https://image.tmdb.org/t/p/';
const posterSize= 'w300/'

class MovieList extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false}), 1500);
    }

    render() {
        const { loading } = this.state;
        if(loading) {
            return(
                <div className="loader">
                </div>
            )
        } else if (this.props.movies.length > 0) {
        const elements = this.props.movies.map(movies => {

            return (
                    <MovieCard
                        key={movies.id}
                        id={movies.id}
                        title={movies.title}
                        score={movies.vote_average}
                        posterPath={posterBaseUrl + posterSize + movies.poster_path}
                        releaseDate={movies.release_date}
                        overview={movies.overview}
                    />
                );
            })
            return elements;

        } else {
            return (
                <div>
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