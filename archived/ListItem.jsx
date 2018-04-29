import React from 'react';

const ListItem = ( { genreName, setGenre } ) => {
    const listItemStyle = {
        maxWidth: '150px',
        border: '1px solid white',
        margin: '2px auto 2px auto',
        padding: '2px 10px',
        color: 'white',
        cursor: 'pointer'
    }

    return(
        <div style={listItemStyle}>
            <p onClick={() => setGenre(genreName)}>
            {genreName}
            </p>
        </div>
    );
}

export default ListItem;