import { Component } from "react";
import { connect } from "react-redux";


class DetailMovie extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            movie:{}
        }
        // console.log('ID DE PELI',this.props.match.params.id)
        
        
    }
    
    componentDidMount(){
        this.modState()
    }

    modState = () => {
        let detailedMovie = this.props.searchedMovies.filter(movie => movie.imdbID === this.props.match.params.id)
        console.log('pelicula',detailedMovie[0])
        this.setState({movie:detailedMovie[0]})
        console.log('state',this.state)
    }
    
    render(){
        return (
        <div>
            {this.state.movie != null ? 
            <div className="container">
                <div className="row ">
                    <div className="col">
                        <div className="card" >
                            <img src={this.state.movie.Poster} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{this.state.movie.Title}</h5>                    
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    <div className="card" >
                        <h4>Year: {this.state.movie.Year}</h4>
                        <h4>Type: {this.state.movie.Type}</h4>
                        </div>
                    </div>
                </div>
            </div>
            : <h2>Not found</h2>}
        </div>)
    }
}

const mapStateToProps = (state) => {
    return{
        searchedMovies: state.searchedMovies
    }
}

const conection = connect(mapStateToProps)

export default conection(DetailMovie)