import { connect } from "react-redux"
import { getMovies } from "../actions"
import { useState } from "react"
import { NavLink } from "react-router-dom"
function NavBar(props){

    const [title, setTitle] = useState('')

    function fillTitle(event){
        setTitle(event.target.value)
        // console.log(title)
    }


    function searchMovies(e){
        e.preventDefault()
        // console.log('COMMITING SEARCH')
        // console.log('STATE',title)
        props.getMovies(title)
    }

    return <div>
       <div className="navbar navbar-expand-lg navbar-dark bg-dark">
       <div className="container-fluid">
    <a className="navbar-brand" href="#">iMDB Search</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
          <NavLink className='nav-link' exact to='/'>Home</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className='nav-link' to='/favorites'>Favorites</NavLink>
        </li>        
      </ul>
    </div>
    <form className="d-flex" onSubmit={(e) =>searchMovies(e)}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={fillTitle}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
       </div>
    </div></div>
}

// const mapStateToProps = (state) => {
//     return{
//         searchedMovies: state.searchedMovies
//     }
// }

const conection = connect(null, {getMovies})

export default conection(NavBar)