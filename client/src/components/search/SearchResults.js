import React from 'react'

function SearchResults() {
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
              value="Star"
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded-lg"
            >
              Search
            </button>
          </div>
        </div>
      </header>
      <div className="container mx-auto pb-4">
        <div className="max-w-sm w-full lg:max-w-full lg:flex mt-4">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{
              backgroundImage: `url('https://fwemoviedb.herokuapp.com/img/w188_and_h282_bestv2/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg')`
            }}
            title="Star Wars"
          ></div>
          <div
            className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
          >
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">
                Star Wars
              </div>
              <p className="text-gray-700 text-base">
                Princess Leia is captured and held hostage by the evil Imperial
                forces in their effort to take over the galactic Empire.
                Venturesome Luke Skywalker and dashing captain Han Solo team
                together with the loveable robot duo R2-D2 and C-3PO...
              </p>
            </div>
            <div className="text-sm">
              <p className="text-gray-600">May 25, 1977</p>
            </div>
          </div>
        </div>

        <div className="max-w-sm w-full lg:max-w-full lg:flex mt-4">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{
              backgroundImage: `url('https://fwemoviedb.herokuapp.com/img/w188_and_h282_bestv2/hN2ZtF3Uw6mhIHZiqL0SKzELtKn.jpg')`
            }}
            title="Star Trek"
          ></div>
          <div
            className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
          >
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">
                Star Trek
              </div>
              <p className="text-gray-700 text-base">
                The fate of the galaxy rests in the hands of bitter rivals. One,
                James Kirk, is a delinquent, thrill-seeking Iowa farm boy. The
                other, Spock, a Vulcan, was raised in a logic-based society that
                rejects all emotion. As fiery instinct clashes with calm...
              </p>
            </div>
            <div className="text-sm">
              <p className="text-gray-600">May 6, 2009</p>
            </div>
          </div>
        </div>

        <div className="max-w-sm w-full lg:max-w-full lg:flex mt-4">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{
              backgroundImage: `url('https://fwemoviedb.herokuapp.com/img/w188_and_h282_bestv2/db32LaOibwEliAmSL2jjDF6oDdj.jpg')`
            }}
            title="Star Wars: The Rise of Skywalker"
          ></div>
          <div
            className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
          >
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">
                Star Wars: The Rise of Skywalker
              </div>
              <p className="text-gray-700 text-base">
                The surviving Resistance faces the First Order once again as the
                journey of Rey, Finn and Poe Dameron continues. With the power and
                knowledge of generations behind them, the final battle begins...
              </p>
            </div>
            <div className="text-sm">
              <p className="text-gray-600">Dec 18, 2019</p>
            </div>
          </div>
        </div>

        <div className="max-w-sm w-full lg:max-w-full lg:flex mt-4">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{
              backgroundImage: `url('https://fwemoviedb.herokuapp.com/img/w188_and_h282_bestv2/cldAwhvBmOv9jrd3bXWuqRHoXyq.jpg')`
            }}
            title="Star Trek: Nemesis"
          ></div>
          <div
            className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
          >
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">
                Star Trek: Nemesis
              </div>
              <p className="text-gray-700 text-base">
                En route to the honeymoon of William Riker to Deanna Troi on her
                home planet of Betazed, Captain Jean-Luc Picard and the crew of
                the U.S.S. Enterprise receives word from Starfleet that a coup has
                resulted in the installation of a new Romulan political leader,
                Shinzon, who claims to seek peace with the human-backed United
                Federation of Planet...
              </p>
            </div>
            <div className="text-sm">
              <p className="text-gray-600">Dec 13, 2002</p>
            </div>
          </div>
        </div>

        <div className="max-w-sm w-full lg:max-w-full lg:flex mt-4">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{
              backgroundImage: `url('https://fwemoviedb.herokuapp.com/img/w188_and_h282_bestv2/m7SHlvcGfCkbzk2xP7XHDOI6o93.jpg')`
            }}
            title="Star Trek Beyond"
          ></div>
          <div
            className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
          >
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">
                Star Trek Beyond
              </div>
              <p className="text-gray-700 text-base">
                The USS Enterprise crew explores the furthest reaches of uncharted
                space, where they encounter a mysterious new enemy who puts them
                and everything the Federation stands for to the test.
              </p>
            </div>
            <div className="text-sm">
              <p className="text-gray-600">Jul 7, 2016</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResults
