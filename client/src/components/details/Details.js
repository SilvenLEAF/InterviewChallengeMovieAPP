import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


import MyLoader from '../../helpers/MyLoader'


function Details() {
  const { id } = useParams()


  const [item, setItem] = useState();
  

  
  useEffect(()=>{
    const getDetails = async () =>{
      const response = await fetch(`/details/${ id }`);
      const data = await response.json();

      setItem(data);
    };

    getDetails();
  }, []);


  return !item ? (
    <div className="myLoaderPageHolder">
      <MyLoader/>
    </div>
  ) : (
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
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded-lg"
            >
              Search
            </button>
          </div>
        </div>
      </header>
      <div className="container mx-auto p-4 flex">
        <img
          src={ `https://image.tmdb.org/t/p/w185${item.poster_path}` }
          alt={ item.title }
          className="rounded h-64 mr-4"
        />
        <div className="w-full">
          <h1 className="text-3xl">{ item.title || "No Title Given" }</h1>
          <p className="text-grey-darker text-sm">{ item.release_date || "No Info Given" }</p>
          <p>
            { item.overview || "No Info Given" }
          </p>
        </div>
      </div>
    </div>
  )
}

export default Details
