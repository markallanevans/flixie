import React, { Component } from 'react';
import MovieList from './Components/MovieList';
import GenreList from './Components/GenreList';

const movie_API_KEY = '?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed';
const genreListUrl = 'https://api.themoviedb.org/3/genre/movie/list';
const movie_API_URL = 'https://api.themoviedb.org/3/movie/';
const BASE_URL = 'https://api.themoviedb.org/3/genre/';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      fullMovieList: [],
      movies: [],
      genres: [],
      collection: 'popular',
      searchText: 'Search...',
    };
    this.collectionQuery = this.collectionQuery.bind(this);
    this.displayNowPlaying = this.displayNowPlaying.bind(this);
    this.genreQuery = this.genreQuery.bind(this);
    this.fetchGenres = this.fetchGenres.bind(this);
  }
  
  async fetchGenres() {
    const query = genreListUrl + movie_API_KEY;
    const data = await fetch(query);
    const response = await data.json();
    const genresResults = response.genres;
    this.setState({ genres: genresResults });
  }
  
  
  async collectionQuery (collection) {
    const query = movie_API_URL + collection + movie_API_KEY;
    const data = await fetch(query);
    const response = await data.json();
    const fullMovieList = response.results;
    let collectionCheck = collection;
    if(this.state.movies.length > 0 && collectionCheck !== 'now_playing') {
      return
    } else {
      this.setState({
        fullMovieList: fullMovieList,
        movies: fullMovieList,
        currentGenre: 'none'
      })
    }
  }
  
  
  async genreQuery (genreID) {
    const genreApiCall = '/movies?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US&include_adult=false&sort_by=created_at.asc'
    const genreQueryURI = BASE_URL + genreID + genreApiCall;
    
    const data = await fetch(genreQueryURI);
    const response = await data.json();
    const moviesOfGenre = response.results;
  
    this.setState({
      fullMovieList: moviesOfGenre,
      movies: moviesOfGenre,
      currentGenre: genreID
    })
  }
  
  componentDidMount() {
    this.collectionQuery(this.state.collection);
    this.fetchGenres();
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

  refreshFilter() {
    const allMovies = this.state.fullMovieList;
    this.setState({ 
      movies: allMovies,
      searchText: '',
    });
  }

  displayNowPlaying() {
    const nowPlaying = 'now_playing';
    this.collectionQuery(nowPlaying);
  }


  setGenre = (event) => {
    const genreID = event.target.value;
    this.collectionQuery(genreID);
    this.genreQuery(genreID);
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
          <input style={inputStyle} className="w-40" placeholder={this.state.searchText} onChange={(userText) => this.filterMovies(userText.target.value)} />
          <button style={buttonStyle} className="button w-10" onClick={this.refreshFilter.bind(this)}>Refresh</button>
          <button style={buttonStyle} className="button w-30" onClick={this.displayNowPlaying}>Now Playing</button>
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
