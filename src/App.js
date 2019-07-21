import React, { Component } from 'react';
import Api from './services/Api';
import SortableMovieList from './Components/SortableMovieList';
import { COLLECTIONS } from './config/tmdb';

const { NOW_PLAYING, POPULAR } = COLLECTIONS;
const flixieTitle = require('./images/fliXie_dark.png');

const styles = {
  headerWrapper: {
    textAlign: 'center',
    backgroundColor: 'rgba(20, 20, 52, 0.85)',
  },
  headerStyle: {
    width: '100%',
    height: '400px',
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
  },
  fliXieStyle: {
    width: '80%',
    height: 'auto',
    bottom: '0px',
  },
  inputStyle: {
    height: '24px',
    background: '#111133',
    color: 'White',
    fontSize: '16px',
    textAlign: 'center',
    border: 'none',
    borderBottom: '2px solid #444455',
    margin: '10px 10px',
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
    cursor: 'pointer',
  },
  searchRow: {
    width: '100%',
    float: 'left',
  },
  refreshIcon: {
    maxWidth: '40px',
    verticalAlign: 'middle',
    cursor: 'pointer',
  },
};

class App extends Component {
  constructor() {
    super();

    this.collectionQuery = this.collectionQuery.bind(this);
    this.toggleNowPlaying = this.toggleNowPlaying.bind(this);
    this.genreQuery = this.genreQuery.bind(this);
    this.fetchGenres = this.fetchGenres.bind(this);
    this.toggleSortOrder = this.toggleSortOrder.bind(this);

    this.api = new Api();

    this.state = {
      fullMovieList: [],
      movies: [],
      genres: [],
      collection: COLLECTIONS.POPULAR,
      searchText: 'Search...',
      loaded: false,
      sortCriteria: 'title',
      sortOrder: 'asc',
    };
  }

  async fetchGenres() {
    const genres = await this.api.getGenres();
    this.setState({ genres });
  }

  async collectionQuery(collection) {
    const fullMovieList = await this.api.getCollection(collection);

    this.setState({
      fullMovieList,
      movies: fullMovieList,
      loaded: true,
    });
  }

  async genreQuery(genreID) {
    const moviesOfGenre = await this.api.getMoviesOfGenre(genreID);

    this.setState({
      fullMovieList: moviesOfGenre,
      movies: moviesOfGenre,
    });
  }

  componentDidMount() {
    this.collectionQuery(this.state.collection);
    this.fetchGenres();
  }

  filterMovies(filterText) {
    const allMovies = this.state.fullMovieList;
    const filteredMovies = allMovies.filter(
      m => m.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1,
    );
    this.setState({
      movies: filteredMovies,
    });
  }

  refreshFilter() {
    const allMovies = this.state.fullMovieList;
    this.refs.searchBox.value = '';
    this.setState({
      movies: allMovies,
      searchText: '',
    });
  }

  toggleNowPlaying() {
    const { collection } = this.state;
    const newCollection = collection === NOW_PLAYING ? POPULAR : NOW_PLAYING;
    this.collectionQuery(newCollection);
    this.setState({ collection: newCollection });
  }

  setGenre = event => {
    const genreID = event.target.value;
    this.genreQuery(genreID);
  };

  toggleSortOrder() {
    const newOrder = this.state.sortOrder === 'asc' ? 'desc' : 'asc';
    this.setState({ sortOrder: newOrder });
  }

  render() {
    const { searchText, collection, movies, loaded, genres } = this.state;

    return (
      <div style={styles.headerWrapper}>
        <header style={styles.headerStyle}>
          <img style={styles.fliXieStyle} src={flixieTitle} alt="title" />
        </header>
        <section id="searchandsort">
          <div style={styles.searchRow}>
            <input
              style={styles.inputStyle}
              ref="searchBox"
              className="w-40"
              placeholder={searchText}
              onChange={userText => this.filterMovies(userText.target.value)}
            />
            <img
              src={require('./images/refresh_icon.png')}
              style={styles.refreshIcon}
              onClick={this.refreshFilter.bind(this)}
              alt="refreshicon"
            />
            <button
              style={styles.buttonStyle}
              className="button w-30"
              onClick={this.toggleNowPlaying}
            >
              {collection === NOW_PLAYING ? 'Popular' : 'Now Playing'}
            </button>
          </div>
        </section>
        <SortableMovieList
          movies={movies}
          loaded={loaded}
          setGenre={this.setGenre}
          genres={genres}
        />
      </div>
    );
  }
}

export default App;
