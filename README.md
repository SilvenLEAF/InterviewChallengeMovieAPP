## Munpat Recruiting: Fullstack Engineering Coding Challenge

Welcome to Munpat's Fullstack Engineering coding challenge! We appreciate your interest for working with us. At Munpat, we care and pay utmost attention to security, performance, scalability and user experience of our products and platforms. That requires top quality engineering, innovation and a growth mindset. This assignment will help us assess your candidacy to be an engineer at Munpat. Are you ready for the challenge?

### THE CHALLENGE:

Fireworks Entertainment is a new startup trying to be the #1 movie and TV show information portal in the world. They have already constructed their database full of movies and TV shows. Now they want a great fullstack engineer to help them build their backend services and the user facing application. Do you think you can help?

### THE OUTCOME:

Here is what Fireworks Entertainment is asking you to do:

1. Build a frontend app that matches the designs in the `designs` folder.

   Frontend app needs to have these three routes:  
   | Route | Name | Description |
   |----------------|---------------------|-------------------------------------------------------------|
   | `/` | Home Page | Shows search box + listings of popular movies and TV shows |
   | `/results` | Search Results Page | Shows results from the search query |
   | `/details/:id` | Details Page | Shows details of a particular movie or a TV show |

   - Frontend needs to be built using the following technologies:
     - [Nuxt](https://nuxtjs.org/) or [Vue](https://vuejs.org/)
     - [Tailwind CSS](https://tailwindcss.com/)
   - Frontend needs to get its data from the backend service decribed in #2 below.

   ⭐ **BONUS POINTS:**

   - Can you add `Pagination` to the `Search Results` page?
   - Can you add `Top Rated` and `Upcoming` sections to the home page?

2. Develop a performant and scalable backend service to support the frontend app.

   Backend service must have these three REST endpoints:  
   | Endpoint | Name | Description |
   |---------------------|------------------------------|-----------------------------------------------------------|
   | `GET /list` | Popular Movies and TV shows | Returns list of popular movies and TV shows |
   | `GET /search/:term` | Search | Returns movies and TV shows related to the search term |
   | `GET /details/:id` | Movie and TV show details | Returns details for the movie or TV show for a given ID |

   - Backend service can be built using any of the following language / framework:

   | Language                             | Framework                                                                                                  |
   | ------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
   | [Crystal](https://crystal-lang.org/) | [Kemal](https://kemalcr.com/)                                                                              |
   | [Elixir](https://elixir-lang.org/)   | [Phoenix](https://phoenixframework.org/)                                                                   |
   | [Golang](https://golang.org/)        | [Fiber](https://gofiber.io/)                                                                               |
   | [Python](https://www.python.org/)    | [Falcon](https://falcon.readthedocs.io/en/stable/) or [Hug](https://hugapi.github.io/hug/)                 |
   | [Node.js](https://nodejs.org/en/)    | [Nest.js](https://nestjs.com/) or [Actionhero](https://www.actionherojs.com/) or [Koa](https://koajs.com/) |

   - You can obtain data for movies and TV shows from their api here: https://fwemoviedb.herokuapp.com

     - Use the following url formats when making requests:
       - For data: `https://fwemoviedb.herokuapp.com/3/{endpoint}?api_key=e800e93ef4806616964242bbd2619ae1&{other_query_params}`  
         Example: `https://fwemoviedb.herokuapp.com/3/movie/popular?api_key=e800e93ef4806616964242bbd2619ae1&page=1`
       - For images: `https://fwemoviedb.herokuapp.com/img/{size}/{file}`  
         Example: `https://fwemoviedb.herokuapp.com/img/w500/wO5QSWZPBT71gMLvrRex0bVc0V9.jpg`
     - Here is the list of available endpoints:

     | Endpoint                                      | Description                                       |
     | --------------------------------------------- | ------------------------------------------------- |
     | `GET` /movie/latest                           | Get the most newly created movie.                 |
     | `GET` /movie/now_playing?page={page}          | Get a list of movies in theatres.                 |
     | `GET` /movie/popular?page={page}              | Get a list of the current popular movies.         |
     | `GET` /movie/top_rated?page={page}            | Get the top rated movies.                         |
     | `GET` /movie/upcoming?page={page}             | Get a list of upcoming movies in theatres.        |
     | `GET` /movie/{movie_id}                       | Get the primary information about a movie.        |
     | `GET` /movie/{movie_id}/images                | Get the images that belong to a movie.            |
     | `GET` /movie/{movie_id}/videos                | Get the videos that have been added to a movie.   |
     | `GET` /tv/latest                              | Get the most newly created TV show.               |
     | `GET` /tv/airing_today?page={page}            | Get a list of TV shows that are airing today.     |
     | `GET` /tv/popular?page={page}                 | Get a list of the current popular TV shows.       |
     | `GET` /tv/top_rated?page={page}               | Get a list of the top rated TV shows.             |
     | `GET` /tv/{tv_id}                             | Get the primary TV show details by id.            |
     | `GET` /tv/{tv_id}/images                      | Get the images that belong to a TV show.          |
     | `GET` /tv/{tv_id}/videos                      | Get the videos that have been added to a TV show. |
     | `GET` /person/{person_id}                     | Get the primary person details by id.             |
     | `GET` /person/{person_id}/images              | Get the images for a person.                      |
     | `GET` /search/movie?query={query}&page={page} | Search for movies.                                |
     | `GET` /search/tv?query={query}&page={page}    | Search for a TV show.                             |

     - Here is the list of available image sizes:
       - Backdrop: `w300`, `w780`, `w1280` and `original`
       - Logo: `w45`, `w92`, `w154`, `w185`, `w300`, `w500`, `original`
       - Poster: `w92`, `w154`, `w185`, `w342`, `w500`, `w780`, `original`
       - Profile: `w45`, `w185`, `h632`, `original`
       - Still: `w92`, `w185`, `w300`, `original`

   ⭐ **BONUS POINTS:**

   - Can you add `Pagination` to the `/search` endpoint?
   - Can you add support for `Top Rated` and `Upcoming` movies and TV shows in the `/list` endpoint?

3. Add all your `frontend` code in `src/client` folder.  
   Similarly, add all your `service` code in `src/server` folder.

### NEEDED BY:

This work should take roughly 4 to 5 hours. Do you think you can finish this job in next 48 hours?

### CODING STYLE:

- Make sure to write good commit message that make sense
- Avoid commiting everything at once. Commit ofter and keep commits small, succinct and easy to review.
- Use proper linters and code formatters -- `eslint` and `prettier` for example.
