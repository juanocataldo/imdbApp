import React from "react";
import { Route } from "react-router-dom";
import Favorites from "./components/Favorites";
import NavBar from "./components/NavBar";
import SearchResult from "./components/SearchResult";
import DetailMovie from "./components/DetailMovie";

function App() {
  return (
      <React.Fragment>
          <NavBar />   
        <Route path='/favorites'>
          <Favorites />
        </Route>
        <Route path='/movie/:id' component={DetailMovie} />        
        <Route exact path='/'>
          <SearchResult />
        </Route>
      </React.Fragment>
  );
}

export default App;
