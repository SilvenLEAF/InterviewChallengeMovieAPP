import React from 'react'




function Details() {
  return (
    <div className="bg-gray-100 p-0 subpixel-antialiased">
      <header className="px-4 py-3 shadow bg-blue-900">
        <div className="container mx-auto flex">
          <div>
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
          src="https://fwemoviedb.herokuapp.com/img/w440_and_h660_face/r4jFaeVIPGl2zXEDtmwrx9orIY4.jpg"
          alt="Aarya"
          className="rounded h-64 mr-4"
        />
        <div className="w-full">
          <h1 className="text-3xl">Aarya</h1>
          <p className="text-grey-darker text-sm">June 19, 2020</p>
          <p>
            When her world suddenly turns upside down, will Aarya become the very
            thing she hated?How far will she go to survive and protect her family?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Details
