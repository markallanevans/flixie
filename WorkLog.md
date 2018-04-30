# Friday April 27th

__**Overall to do List**__
-> research and better understand possible API searches
-> add better header background
-> fix Flixie Header Logo
-> get all movies in the API (or at least get more than 10)
-> display date in better format

__Optional:__
-> sort movies by rating, popularity, release date (this should be easy and doesn't need a new API call)
-> add animation for the open/close
-> get high resolution version in a lightbox
-> infinite scrolling
-> change layouts on the fly (maybe a theme changer?)

__*Done*__
-> add favicon to site
-> fix the "loading" button so it actually functions based on whether a fetch request returns data
-> make a change to the genre refresh the api call
-> user can click button to refresh search
-> create dropDown from genre list that can be clicked
-> display "No movie found" if search returns no results
-> fix "Now Playing" function
-> fix "now playing" button on small screens
-> make the search case-independent
-> list genre list retrieved through fetching API:
    __Learnings__
    + had to make an empty array in the state for the movies // Is there another way?
    + had to double check the array output to discover that the "response" in JSON was different from movies. In the genres list, the array of genre objects was was one level down in the tree... had to store, response.results for the movie list but reponse.genres for the genres list. **key learning: make sure to inspect the JSON object thoroughly. A little patience in the beginning can lead to faster results later**
    + on the buttons in <ListItem /> had to use onClick={() => console.log('me!')} and not just plain {console.log('me!')} to avoid having the logs happen automatically.
    + in the select and option set, had to put onChange in the select tag, why? Didn't work in the option tag.
    + learnings: to continue research, previously the genrelist toggle was failing due to the fact that the movies list was being screwed up in the second api call... fixed it by plugging in an if statement to check if movies was already full. in case it was, it returns out of the function... but... need to go deeper and make sure the collection query is not called on componentDidMount in the first place.
    + was able to make the SearchBox clear itself by adding "ref" to the Searchbox and using     
        this.refs.searchBox.value = '';
    to make it work. Is there a better way?





##The Movie Database API
## Check out The Movie Database documentation. In particular:

- the "Now Playing" endpoint.
- the "Top Rated" endpoint

The movie poster is available by appending the returned poster_path to https://image.tmdb.org/t/p/w342.
The low resolution movie poster is available by appending the returned poster_path to https://image.tmdb.org/t/p/w45
The high resolution movie poster is available by appending the returned poster_path to https://image.tmdb.org/t/p/original


#Learnings

- Fixed the 'Now Playing' issue by binding BOTH collectionQuery AND displayNowPlaying in the constructor. 'cause essentially 'this' is nothing without binding.




API CALLS:
const movie_API_KEY = 
'?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed';
const genreListUrl = 'https://api.themoviedb.org/3/genre/movie/list';
const movie_API_URL = 'https://api.themoviedb.org/3/movie/';


**HOW TO GET GENRE LIST*
+ BASE URL:
https://api.themoviedb.org/3/genre/


+ GENRE ID:

28

+ STRING:
/movies?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US&include_adult=false&sort_by=created_at.asc

