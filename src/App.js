import React, { Component } from 'react';
import MovieList from './Components/MovieList';
import GenreList from './Components/GenreList';

const movie_API_KEY = '?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed';
const genreListUrl = 'https://api.themoviedb.org/3/genre/movie/list';
const movie_API_URL = 'https://api.themoviedb.org/3/movie/';

class App extends Component {
  
  constructor() {
      super();
      this.state = {
          movies: [],
          genres: []
      };
      this.collectionQuery = this.collectionQuery.bind(this);
      this.displayNowPlaying = this.displayNowPlaying.bind(this);
      this.genreQuery = this.genreQuery.bind(this);
  }

  async collectionQuery (collection) {
    let collectionCheck = collection;
    if(this.state.movies.length > 0 && collectionCheck !== 'now_playing') {
      return
    } else {
      const query = movie_API_URL + collection + movie_API_KEY;
      const data = await fetch(query);
      const response = await data.json();
      const fullMovieList = response.results;
      console.log(query);
      const query2 = genreListUrl + movie_API_KEY;
      const data2 = await fetch(query2);
      const response2 = await data2.json();
      const genresResults = response2.genres;
      this.setState({
        fullMovieList: fullMovieList,
        movies: fullMovieList,
        genres: genresResults,
        currentGenre: 'none'
      })
    }
  }

  async genreQuery (genreID) {
    const BASE_URL = 'https://api.themoviedb.org/3/genre/';
    const genreApiCall = '/movies?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US&include_adult=false&sort_by=created_at.asc'
    const genreQuery = BASE_URL + genreID + genreApiCall;

    const data = await fetch(genreQuery);
    const response = await data.json();
    const genreList = response.results;
  
    this.setState({
      fullMovieList: genreList,
      movies: genreList,
      currentGenre: genreID
    })
  }


  
  componentDidMount() {
    const initialCollection = 'popular'
    this.collectionQuery(initialCollection);
  }

  filterMovies(filterText) {
    const allMovies = this.state.fullMovieList;
    const filteredMovies = allMovies.filter(
      m => m.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
    )
    this.setState({
        movies: filteredMovies
      })
  }

  displayNowPlaying() {
    const nowPlaying = 'now_playing';
    this.collectionQuery(nowPlaying);
  }


  setGenre = (event) => {
    const val = event.target.value;
    console.log(val)
    this.collectionQuery(val);
    this.genreQuery(val);
  }

  render() {

    const headerBackground = require("./images/headerbackground.png")
    const backGroundUrl = require("./images/fancy-pants.jpg")
    const flixieTitle = require('./images/fliXie-smile-2.png')

    const headerStyle = {
      width: '100%',
      height: '400px',
      backgroundImage: `url(${headerBackground}`,
      backgroundPosition: 'center 95%',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      color: '#fff',
      paddingTop: '40px',
      paddingBottom: '20px',
      display: 'table-cell',
      verticalAlign: 'bottom',
    }

    const fliXieStyle = {
      width: '80%',
      height: 'auto',
      bottom: '0px',
    }

    const listStyle = {
      backgroundImage: `url(${backGroundUrl})`,
      backgroundAttachment: 'fixed',
      display: 'flex',
      width: '100%',
      flexFlow: 'row wrap',
      justifyContent: 'center' 
    }

    const inputStyle = {
      width: '40%',
      height: '50px',
      background: '#111133',
      color: 'White',
      fontSize: '16px',
      textAlign: 'center',
      border: '3px solid white',
      margin: '10px 10px',
    }

    const buttonStyle = {
      textTransform: 'capitalize',
      width: '40%',
      height: '50px',
      background: '#222244',
      color: 'White',
      fontSize: '16px',
      textAlign: 'center',
      border: '1px solid white',
      margin: '10px 10px',
      cursor: 'pointer'
    }
    
    return (
      <div style={{textAlign: 'center', backgroundColor: 'rgb(49, 49, 66)'}}>
        <header style={headerStyle}>
          <img style={fliXieStyle} src={flixieTitle} alt='title'></img>
        </header>
        <section id="searchandsort">
          <input style={inputStyle} placeholder='Search...' onChange={(userText) => this.filterMovies(userText.target.value)} />
          <button style={buttonStyle} onClick={this.displayNowPlaying} className='button' >Now Playing</button>
          <GenreList setGenre={this.setGenre} genres={this.state.genres} />
        </section>
        <div style={listStyle}>
        <MovieList movies={this.state.movies} />
        </div>
      </div>
    );
  }
}

export default App;
