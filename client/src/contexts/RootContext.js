import React from 'react'
import MovieSearchContextProvider from './subContexts/MovieSearchContext'

function RootContext({ children }) {
  return (
    <>
      
      <MovieSearchContextProvider>
        { children }
      </MovieSearchContextProvider>
    
    </>
  )
}

export default RootContext
