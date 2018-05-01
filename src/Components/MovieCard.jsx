import React from 'react';

const MovieCard = ( {id, title, renderLightBox, fullResUrl, posterSrc, voteCount, popularity, score, posterPath, releaseDate, overview} ) => {

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
        color: '#888899',
        height: '150px',
        padding: '10px',
        overflowY: 'scroll',
        textAlign: 'justify'
    }

    const titleStyle = {
        display: 'inline-block',
        width: '108%',
        minHeight: '48px',
        color: '#bbbbcc',
        // lineHeight: '56px',
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
    }

    const posterStyle = {
        border: '1px solid #444455',
        boxShadow: '0 0 25px 0 #333355',
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
            <div style={titleStyle}>
                <h1 style={{paddingLeft: '16px'}}> {title} </h1>
            </div>
            {/*<div style={scoreStyle}><p style={{}}> {score} </p></div>*/}
            {/* <img src={posterPath} name={id} className='border-rounded' style={posterStyle} alt='' onClick={() => renderLightBox(fullResUrl+posterSrc)}></img> */}
            <img src={posterPath} name={id} className='border-rounded' style={posterStyle} alt=''></img>
            
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