import { connect } from "react-redux"
import {Component} from 'react'

class Favorites extends Component{
    constructor(props){
        super(props)
      
    }

        
    

    render(){
        console.log(this.props.favoriteMovies)
        return(
    
    
        <div className="container">
      
        <div className="cardContainer">
        {this.props.favoriteMovies && this.props.favoriteMovies.map(movie => 
                    <div className="card" >
                        <img src={movie.Poster} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">{movie.Title}</h5>
                        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        
                        </div>
                    </div>
                )}
                </div>



        </div>)
    
    }
    
}

const mapStateToProps = (state) => {
    return {
        favoriteMovies: state.favoriteMovies
    }
}

const conection = connect(mapStateToProps)

export default conection(Favorites)