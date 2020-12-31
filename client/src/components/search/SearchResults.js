import React, { useEffect, useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';




import MyLoader from '../../helpers/MyLoader';
import MyWelcome from '../../helpers/MyWelcome';
import { MovieSearchContext } from '../../contexts/subContexts/MovieSearchContext'

import SearchResultItem from './SearchResultItem'


function SearchResults() {

  const { searchResults, setSearchResults, searchLoading, setSearchLoading } = useContext(MovieSearchContext)
  
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState('');




  const handleSearchButtonClick = async ()=>{
    try {
      const response = await fetch(`/search/${ searchTerm }`)
      
            
      const data = await response.json();
      
      

      if(data && data.results && data.results[0]){
        
        setSearchTerm('');
        setSearchResults(data.results);   
        
        
        
      } else {
        
        setSearchLoading(false);
      
                

      }

      history.push('/results');

    } catch (err) {
      setSearchLoading(false);
      history.push('/results');
    }
  }



  const loadingOrNull = searchLoading ?
  (        
    <MyLoader/>        
  ) : (        
    <MyWelcome title="No movie found:(" />        
  );




  return (
    <div className="bg-gray-100 p-0 subpixel-antialiased">
      <header className="px-4 py-3 shadow bg-blue-900">
        <div className="container mx-auto flex">
          <div>
            <Link to="/" >
              <h1
                  className="text-2xl text-gray-100 tracking-wider font-bold leading-none"
                >
                  Fireworks
                </h1>
                <h2
                  className="text-sm text-gray-300 tracking-widest font-semibold uppercase leading-none"
                >
                  Entertainment
                </h2>
            </Link>
          </div>
          <div className="flex w-full ml-4">
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="text"
              placeholder="Movie or TV Series"
              value={ searchTerm }
              onChange={ e=> setSearchTerm(e.target.value) }
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded-lg"
              onClick={ handleSearchButtonClick }
            >
              Search
            </button>
          </div>
        </div>
      </header>
      <div className="container mx-auto pb-4">

        {
          !searchResults || (searchResults && !searchResults[0]) ?  loadingOrNull : (
            searchResults[0] && searchResults.map((item, index)=>{
              return (
                
                <SearchResultItem item={ item } />
                
              )
            })
          )
        }

      
      </div>
    </div>
  )
}

export default SearchResults
