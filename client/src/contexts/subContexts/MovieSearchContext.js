import React, { createContext, useState } from 'react'






export const MovieSearchContext = createContext();






function MovieSearchContextProvider(props) {
  const [allSearchMovies, setAllSearchMovies] = useState([]);
  return (
    <MovieSearchContext.Provider value={{ allSearchMovies, setAllSearchMovies }} >
      { props.children }
    </MovieSearchContext.Provider>
  )
}

export default MovieSearchContextProvider