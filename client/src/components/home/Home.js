import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';




import PopularMovieItem from './PopularMovieItem';
import MyLoader from '../../helpers/MyLoader';
import MyWelcome from '../../helpers/MyWelcome';
import { MovieTopContext } from '../../contexts/subContexts/MovieTopContext'





function Home() {
  
  const { topMovies, setTopMovies, topLoading, setTopLoading } = useContext(MovieTopContext)
  



  



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
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded-lg"
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
