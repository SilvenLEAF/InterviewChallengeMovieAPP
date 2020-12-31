import React from 'react'

function PopularMovieItem({ item }) {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    <article className="overflow-hidden rounded-lg shadow-lg">
      <a href="#">
        <img
          alt="Placeholder"
          className="block h-auto w-full"
          src={ item.poster_path ? "https://image.tmdb.org/t/p/w185" + item.poster_path : "/8wueWXrIkksKguZpVQL3Boabunq.jpg" }
        />
      </a>

      <header
        className="flex items-center justify-between leading-tight p-2 md:p-4"
      >
        <h1 className="text-lg">
          <a className="no-underline hover:underline text-black" href="#">
            { item.title || "No Title Given" }
          </a>
        </h1>
        <p className="text-grey-darker text-sm"> { item.release_date || "no info given" } </p>
      </header>
    </article>
  </div>
  )
}

export default PopularMovieItem
