import React from 'react';

const MovieCard = ( {id, title, voteCount, popularity, score, posterPath, releaseDate, overview} ) => {

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
        padding: '10px',
        overflowY: 'scroll',
        textAlign: 'justify'
    }

    const titleStyle = {
        display: 'flex',
        width: '108%',
        minHeight: '56px',
        lineHeight: '62px',
        marginTop: '-16px',
        marginLeft: '-16px',
        selfAlign: 'center',
        borderTop: '2x solid white',
        borderBottom: '1px solid white',
        backgroundColor: '#111133',
        opacity: '0.9',
        boxShadow: '0px 4px 16px 0px #111133'
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
    console.log(releaseDate);

    return(
        <div style={cardStyle} className='border-rounded'>
            <h1 style={titleStyle}> {title} </h1>
            {/*<div style={scoreStyle}><p style={{}}> {score} </p></div>*/}
            <img src={posterPath} className='border-rounded' style={{border: '1px solid #ddddff'}} alt=''></img>
            
            <div style={captionStyle}>
                <div style={{marginBottom: '8px', padding: '8px', float: 'left', backgroundColor: '#111133'}}> <strong>Release date:</strong> {releaseDate}</div>
                <div style={{marginBottom: '8px', padding: '8px', float: 'right', backgroundColor: '#111133'}}> <strong>Vote average:</strong> {score}</div>
                <div style={{marginBottom: '8px', padding: '8px', float: 'left', backgroundColor: '#111133'}}> <strong>Vote Count:</strong> {voteCount}</div>
                <div style={{marginBottom: '8px', padding: '8px', float: 'right', backgroundColor: '#111133'}}> <strong>Popularity:</strong> {popularity}</div>
                <div style={{marginBottom: '8px', padding: '8px', clear: 'both'}}> {overview} </div>
            </div>
        </div>
    );
}

export default MovieCard;