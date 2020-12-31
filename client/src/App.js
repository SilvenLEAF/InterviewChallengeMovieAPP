import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';


import RootAppStucture from './PAGES/RootAppStructure';
import RootContext from './contexts/RootContext';
import { MovieTopContext } from './contexts/subContexts/MovieTopContext';




function App() {

  const [topMovies, setTopMovies] = useState();
  const [topLoading, setTopLoading] = useState(true);
 
  
  // GET TOP MOVIES
  useEffect(()=>{
    const getTopMovies = async () =>{
      const response = await fetch(`/list`)
      const data = await response.json();

      
      console.log(data)

      if(data && data.results && data.results[0]){
        setTopMovies(data.results);    
                

      } else {
        setTopLoading(false);
      }

    }

    getTopMovies();

  }, [])






  return (
    <BrowserRouter basename="/">
      <MovieTopContext.Provider value={{ topMovies, setTopMovies, topLoading, setTopLoading }} >
        
        <RootContext >
          <div className="App"><RootAppStucture/></div>
        </RootContext>

      </MovieTopContext.Provider>
      
    </BrowserRouter>
  );
}

export default App;
