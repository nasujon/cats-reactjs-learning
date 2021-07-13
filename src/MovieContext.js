import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props)=> {

  const [movies, setMovies] = useState([
    {
      name: 'harry potter',
      price: '6543',
      id: 5424
    },
    {
      name: 'game of throns',
      price: '44',
      id: 553
    },
    {
      name: 'incription',
      price: '43',
      id: 34
    }

  ])


  return(
    <>
      <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
      </MovieContext.Provider>
    </>
  );
}


