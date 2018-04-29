import React from 'react';

const MovieCard = ( {id, title, score, posterPath, releaseDate, overview} ) => {

    const cardStyle = {
        padding: '10px',
        margin: '10px',
        maxWidth: '400px',
        height: '100%',
        backgroundColor: 'rgba(49, 49, 66, 0.8)',
        color: '#eeeeee',
        textAlign: 'center'
    }

    const captionStyle = {
        height: '150px',
        overflowY: 'scroll',
        textAlign: 'justify'
    }

    // const scoreStyle = {
    //     position: 'relative',
    //     width: '100px',
    //     height: '100px',
    //     top: '80px',
    //     left: '350px',
    //     backgroundColor: 'red',
    //     borderRadius: '50%'
    // }

    return(
        <div style={cardStyle} className='border-rounded'>
            <h1> {title} </h1>
            {/*<div style={scoreStyle}><p style={{}}> {score} </p></div>*/}
            <img src={posterPath} className='border-rounded' style={{border: '1px solid #ddddff'}} alt=''></img>
            
            <div style={captionStyle}>
                <p> {releaseDate} </p>
                <p> {overview} </p>
            </div>
        </div>
    );
}

export default MovieCard;