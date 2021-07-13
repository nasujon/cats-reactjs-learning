import React from 'react';

const Movie = ({name, price}) => {
  
  return(
    <>
      <h3>{name}</h3>
      <h3>{price}</h3>
    </>
  );
}

export default Movie;