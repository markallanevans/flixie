import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

class GenreList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentGenre: '',
        }
    }
    
    setGenre = (genreName) => {
        this.setState({
            currentGenre: genreName,
        })
        console.log(this.state.currentGenre);
    }

    render() {
    const listItems = this.props.genres.map((genres, i) => {
       
        return (
            <ListItem 
            key={i}
            value={genres.name}
            genreName={genres.name}
            setGenre={this.setGenre}
            />
            );
        })

        return listItems;
    }
}

GenreList.propTypes = {
	genres: PropTypes.array,
};

export default GenreList;