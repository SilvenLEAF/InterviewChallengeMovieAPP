import React, { createContext, useState } from 'react'






export const MovieSearchContext = createContext();






function MovieSearchContextProvider(props) {
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(true);
  return (
    <MovieSearchContext.Provider value={{ searchResults, setSearchResults, searchLoading, setSearchLoading }} >
      { props.children }
    </MovieSearchContext.Provider>
  )
}

export default MovieSearchContextProvider