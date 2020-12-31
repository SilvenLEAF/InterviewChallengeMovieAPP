import React, { useEffect, useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';




import PopularMovieItem from './PopularMovieItem';
import MyLoader from '../../helpers/MyLoader';
import MyWelcome from '../../helpers/MyWelcome';
import { MovieTopContext } from '../../contexts/subContexts/MovieTopContext'
import { MovieSearchContext } from '../../contexts/subContexts/MovieSearchContext'





function Home() {
  
  const { topMovies, setTopMovies, topLoading, setTopLoading } = useContext(MovieTopContext)
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



  const loadingOrNull = topLoading ?
   (        
      <MyLoader/>        
    ) : (        
      <MyWelcome title="No movie found:(" />        
    );


  return (
    <div className="bg-gray-100 p-0 subpixel-antialiased">
      <header className="px-4 py-3 shadow bg-blue-900">
        <div className="container mx-auto">
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
      </header>
      <div className="container mx-auto">
        <section
          className="hero h-64 px-6 text-gray-100 flex flex-col justify-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero.jpg')",
            backgroundSize: "cover"
          }} 
        >
          <h3 className="text-4xl font-bold">Welcome!</h3>
          <h4 className="text-xl font-semibold">
            Worlds #1 search engine for Movie and TV Series.
          </h4>
          <div className="flex mt-10">
            <input
              className="bg-white text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
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
        </section>
        <section className="mt-4">
          <h3 className="text-xl">Popular Movies & TV Series</h3>

          <div className="flex flex-wrap -mx-1 lg:-mx-4">

            {
              !topMovies || (topMovies && !topMovies[0]) ?  loadingOrNull : (
                topMovies[0] && topMovies.map((item, index)=>{
                  return (
                    
                    <PopularMovieItem item={ item } />
                    
                  )
                })
              )
            }

            
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
