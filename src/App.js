import React from "react";
import Nav from './Nav'
import MovieList from './MovieList'
import {MovieProvider} from './MovieContext'
import AddMovie from './AddMovie'
import Wrapper from './Styles/TotalStyle'
function App() {
  return (

    <MovieProvider>
      <Wrapper>
        <AddMovie />
        <Nav />
        <MovieList />
      </Wrapper>
      
    </MovieProvider>
    
  );
}



export default App;
