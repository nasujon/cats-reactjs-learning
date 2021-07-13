import React, {useContext} from 'react';
import {MovieContext} from './MovieContext'

const Nav = ({name, price}) => {
  
  const [movies, setMovies] = useContext(MovieContext);

  return(
    <>
      <h3>Sujon</h3>
      <h3>list off movies: {movies.length}</h3>
    </>
  );
}

export default Nav;