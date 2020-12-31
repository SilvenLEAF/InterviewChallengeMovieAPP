import React from 'react'



function SearchResultItem({ item }) {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex mt-4">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/w185${item.poster_path}")`
        }}
        title={ item.title || "No title Given" }
      ></div>
      <div
        className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
      >
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            { item.title || "No Title Given" } 
          </div>
          <p className="text-gray-700 text-base">
            {
              item.overview || "No Info Given"
            }
          </p>
        </div>
        <div className="text-sm">
          <p className="text-gray-600">{ item.release_date || "No Info Given" }</p>
        </div>
      </div>
    </div>


  )
}

export default SearchResultItem
