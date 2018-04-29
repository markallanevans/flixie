import React from 'react';

const GenreList = ( { setGenre, genres } ) => {
    const listItemStyle = {
        maxWidth: '150px',
        border: '1px solid white',
        margin: '2px auto 2px auto',
        padding: '2px 10px',
        color: 'white',
        cursor: 'pointer'
    }

    return(
            <form>
                <select name={genres.id} id={genres.id} onChange={setGenre}>
                {
                    genres.map((genres, i) => {
                        const genreName = genres.name;
                        const genreID = genres.id;

                        return (
                            <option style={listItemStyle} key={i} value={genreID}>
                                {genreName}
                            </option>
                        );
                    })
                }
                </select>
            </form>
        );
    }
export default GenreList;