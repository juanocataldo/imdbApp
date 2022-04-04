import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import { addToFavs } from "../actions"
import '../styles/search.css'
function SearchResult(props){

    console.log('props de SearchResult',props)

    function favMovie(movie){
        props.addToFavs(movie)
    }

    return <div className="container">
        <div className="row">
            <ul>
                <div className="cardContainer">
                {props.searchedMovies && props.searchedMovies.map(movie => 
                        <div className="card" >
                            <NavLink to={`movie/${movie.imdbID}`}>
                                <img src={movie.Poster} className="card-img-top" alt="..." />
                            </NavLink>
                            <div className="card-body">
                            <h5 className="card-title">{movie.Title}</h5>
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            <button onClick={() => favMovie(movie)}>FAV</button> 
                            </div>
                        </div>
                )}
                </div>
            </ul>
        </div>
    </div>
}

const mapStateToProps = (state) => {
    return{
        searchedMovies: state.searchedMovies
    }
}

const conection = connect(mapStateToProps, {addToFavs})

export default conection(SearchResult)
