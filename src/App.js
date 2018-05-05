import React, { Component } from 'react';
import SortableMovieList from './Components/SortableMovieList';

// import LightBoxCarousel from './Components/LightBoxCarousel';

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
      loaded: false,
      sortCriteria: 'title',
      sortOrder: 'asc'
    };
    this.collectionQuery = this.collectionQuery.bind(this);
    this.displayNowPlaying = this.displayNowPlaying.bind(this);
    this.genreQuery = this.genreQuery.bind(this);
    this.fetchGenres = this.fetchGenres.bind(this);
    this.toggleSortOrder = this.toggleSortOrder.bind(this);
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
        loaded: true,
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
    this.refs.searchBox.value = '';
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
    
    //const headerBackground = require("./images/headerbackground.png")
    
    const flixieTitle = require('./images/fliXie_dark.png')
    
    const headerStyle = {
      width: '100%',
      height: '400px',
      //backgroundImage: `url(${headerBackground}`,
      backgroundImage: 'linear-gradient(#000022, #eeeeff)',
      backgroundColor: '#9999aa',
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

    const inputStyle = {
      height: '24px',
      background: '#111133',
      color: 'White',
      fontSize: '16px',
      textAlign: 'center',
      border: 'none',
      borderBottom: '2px solid #444455',
      margin: '10px 10px',
    }

    const buttonStyle = {
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
    }

    const searchRow = {
      width: '100%',
      float: 'left'
    };

    return (
      <div style={{textAlign: 'center', backgroundColor: 'rgba(20, 20, 52, 0.85)'}}>
        <header style={headerStyle}>
          <img style={fliXieStyle} src={flixieTitle} alt='title'></img>
        </header>
        <section id="searchandsort">
          <div style={searchRow}>
            <input style={inputStyle} ref="searchBox" className="w-40" placeholder={this.state.searchText} onChange={(userText) => this.filterMovies(userText.target.value)} />
            <img src={require('./images/refresh_icon.png')} style={{maxWidth: '40px', verticalAlign: 'middle', cursor: 'pointer'}} onClick={this.refreshFilter.bind(this)} alt="refreshicon"></img>
            <button style={buttonStyle} className="button w-30" onClick={this.displayNowPlaying}>Now Playing</button>
          </div>
        </section>
        <SortableMovieList
          movies={this.state.movies}
          loaded={this.state.loaded}
          setGenre={this.setGenre}
          genres={this.state.genres}
        />
      </div>
    );
  }
}

export default App;
