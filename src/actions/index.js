export const SEARCH_MOVIES = 'SEARCH_MOVIES'
export const FAV_MOVIE = 'FAV_MOVIE'
export const DETAIL_MOVIE = 'DETAIL_MOVIE'

export function getMovies(movie){
	return function(dispatch){
		return fetch(`http://www.omdbapi.com/?apikey=5c69ed98&s=${movie}`)
		.then(result => result.json() )
		.then(json => {
            console.log('JSON',json.Search)
			dispatch({
				type: SEARCH_MOVIES,
				payload: json.Search
			})
		})
	}
}

export function addToFavs(movie){
	return{
		type: FAV_MOVIE,
		payload: movie
	}
}

export function detailFromMovie(movie){
	return{
		type: DETAIL_MOVIE,
		payload: movie
	}
}
