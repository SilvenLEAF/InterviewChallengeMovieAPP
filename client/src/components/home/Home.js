import React from 'react'

function Home() {
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
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://fwemoviedb.herokuapp.com/img/w1066_and_h600_bestv2/8wueWXrIkksKguZpVQL3Boabunq.jpg"
                  />
                </a>

                <header
                  className="flex items-center justify-between leading-tight p-2 md:p-4"
                >
                  <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href="#">
                      Aarya
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">June 19, 2020</p>
                </header>
              </article>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://fwemoviedb.herokuapp.com/img/w1066_and_h600_bestv2/6dzmu9zn2OgKVQvhRCgcM9GpA92.jpg"
                  />
                </a>

                <header
                  className="flex items-center justify-between leading-tight p-2 md:p-4"
                >
                  <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href="#">
                      Criminal Justice
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">April 5, 2019</p>
                </header>
              </article>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://fwemoviedb.herokuapp.com/img/w1066_and_h600_bestv2/xXBnM6uSTk6qqCf0SRZKXcga9Ba.jpg"
                  />
                </a>

                <header
                  className="flex items-center justify-between leading-tight p-2 md:p-4"
                >
                  <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href="#">
                      Greyhound
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">July 10, 2020</p>
                </header>
              </article>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://fwemoviedb.herokuapp.com/img/w1066_and_h600_bestv2/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg"
                  />
                </a>

                <header
                  className="flex items-center justify-between leading-tight p-2 md:p-4"
                >
                  <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href="#">
                      Avengers: Infinity War
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">April 27, 2018</p>
                </header>
              </article>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://fwemoviedb.herokuapp.com/img/w1066_and_h600_bestv2/3zCcTOfMfDxFujLxBTFFbD60sDV.jpg"
                  />
                </a>

                <header
                  className="flex items-center justify-between leading-tight p-2 md:p-4"
                >
                  <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href="#">
                      Norsemen
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm"></p>
                </header>
              </article>
            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://fwemoviedb.herokuapp.com/img/w1066_and_h600_bestv2/pFCiUmWcT3FrkTrvLJLbRYVl50X.jpg"
                  />
                </a>

                <header
                  className="flex items-center justify-between leading-tight p-2 md:p-4"
                >
                  <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href="#">
                      Panchayat
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm"></p>
                </header>
              </article>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
