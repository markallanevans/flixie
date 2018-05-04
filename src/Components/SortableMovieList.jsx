import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import GenreList from './GenreList';

const backGroundUrl = require("../images/fancy-pants.jpg")
const upArrow = require('../images/upArrow.png');
const downArrow = require('../images/downArrow.png');
const styles = {
    arrowImageStyle: {
        padding: '0',
        width: '36px',
        backgroundColor: 'transparent',
        verticalAlign: 'middle',
        border: 'none',
    },
    buttonStyle: {
        textTransform: 'uppercase',
        height: '24px',
        background: '#222244',
        color: '#9999aa',
        fontSize: '14px',
        textAlign: 'center',
        border: '1px #444455',
        boxShadow: '0 0 3px #9999aa',
        margin: '8px',
        cursor: 'pointer'
    },
    listStyle: {
        backgroundImage: `url(${backGroundUrl})`,
        backgroundAttachment: 'fixed',
        position: 'relative',
        paddingTop: '40px',
        display: 'flex',
        width: '100%',
        flexFlow: 'row wrap',
        justifyContent: 'center' 
    },
    sortRow: {
        width: '100%',
        float: 'left'
    }
}

class SortableMovieList extends Component {
    constructor(props){
        super(props);
        this.state = {
            sortCriteria: 'title',
            sortOrder: 'asc'
        };

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
            (order === 'desc') ? (comparison * -1) : comparison
        );
      };
    }



    render() {
        if(!this.props.loaded) return (<div className="loader" />)

        this.props.movies.sort(this.sortList(this.state.sortCriteria, this.state.sortOrder));

        return (
        <div>
            <div style={styles.sortRow}>  
                <GenreList setGenre={this.props.setGenre} genres={this.props.genres} sortOrder={this.state.sortOrder} />
                <button style={styles.buttonStyle} onClick={() => this.setState({sortCriteria: 'title'})} selected="selected">Title</button>
                <button style={styles.buttonStyle} onClick={() => this.setState({sortCriteria: 'vote_average'})}>Votes</button>
                <button style={styles.buttonStyle} onClick={() => this.setState({sortCriteria: 'genres_id[0]'})}>Genre</button>
                <button style={styles.buttonStyle} onClick={() => this.setState({sortCriteria: 'release_date'})}>Date</button>
                <button onClick={this.toggleSortOrder} style={styles.arrowImageStyle}>{this.state.sortOrder === 'asc' ? <img src={upArrow} style={styles.arrowImageStyle} alt="uparrow"></img> : <img src={downArrow} style={styles.arrowImageStyle} alt="downArrow"></img>}</button>
            </div>
            <div style={styles.listStyle}>
                <MovieList movies={this.props.movies} />
            </div>
        </div>);
    }
}

SortableMovieList.propTypes = {
    movies: PropTypes.array,
    loaded: PropTypes.bool,
    setGenre: PropTypes.func,
    genres: PropTypes.array,
};

export default SortableMovieList;