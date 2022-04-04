import {SEARCH_MOVIES, FAV_MOVIE, DETAIL_MOVIE} from '../actions/index'

let initialState = {
    searchedMovies: [],
    favoriteMovies: [],
    detailedMovie: {}
}

export default function reducer(state= initialState, action){
    switch (action.type) {
        case SEARCH_MOVIES:
            console.log('ENTRE SEARCHED')
            return{
                ...state,
                searchedMovies: action.payload
            }
        case FAV_MOVIE:
            console.log('ENTRE FAV')
            return{
                ...state,
                favoriteMovies: [...state.favoriteMovies, action.payload]
            }
        case DETAIL_MOVIE:
            console.log('DETAILS')
            return{
                ...state,
                detailedMovie: action.payload
            }
    
        default:
            return state;
    }
}