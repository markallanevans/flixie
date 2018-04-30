import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const posterBaseUrl = 'https://image.tmdb.org/t/p/';
const posterSize= 'w300/'

class MovieList extends Component {
    constructor(props){
        super(props);

        this.sortList = this.sortList.bind(this);
    }

    sortList = (key, order = this.props.sortOrder) => {

        return function (a, b) {
            if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                return 0;
            }
            
        const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
    
        let comparison = 0;
        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
        return (
            (order == 'desc') ? (comparison * -1) : comparison
        );
      };
    }

    render() {
        const loaded = this.props.loaded;
        console.log(loaded);
        if(!loaded) {
            return(
                <div className="loader">
                </div>
            )
        } else if (this.props.movies.length > 0) {
        this.props.movies.sort(this.sortList(this.props.sortCriteria, this.props.sortOrder));
        const elements = this.props.movies.map(movies => {

            return (
                    <MovieCard
                        key={movies.id}
                        id={movies.id}
                        title={movies.title}
                        score={movies.vote_average}
                        posterPath={posterBaseUrl + posterSize + movies.poster_path }
                        releaseDate={movies.release_date}
                        overview={movies.overview}
                        voteCount={movies.vote_count}
                        popularity={Math.floor(movies.popularity)}
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