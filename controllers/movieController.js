const fetch = require('node-fetch');






/* ------------------------------------------
.           GET POPULAR MOVIES
------------------------------------------ */
module.exports.get_popular_movies = async(req, res, next)=>{
  try {
    
    const popularMoviesRes = await fetch(`${ process.env.ROOT_API_URL }/movie/popular?api_key=${ process.env.API_KEY }`)
    const popularMoviesData = await popularMoviesRes.json()


    res.json(popularMoviesData);


  } catch (err) {
    next(err, req, res)
  }
}









/* ------------------------------------------
.           SEARCH MOVIES
------------------------------------------ */
module.exports.search_movies_and_tv_shows = async(req, res, next)=>{
  try {
    
    const searchMoviesRes = await fetch(`${ process.env.ROOT_API_URL }/search/movie?query=${ req.params.term }&api_key=${ process.env.API_KEY }`)
    const searchMoviesData = await searchMoviesRes.json();

    res.json(searchMoviesData);


  } catch (err) {
    next(err, req, res)
  }
}








/* ------------------------------------------
.               SHOW DETAILS
------------------------------------------ */
module.exports.show_details = async(req, res, next)=>{
  try {
    
    const movieDetailsRes = await fetch(`${ process.env.ROOT_API_URL }/movie/${ req.params.id }?api_key=${ process.env.API_KEY }`)
    const movieDetailsData = await movieDetailsRes.json()

    res.json(movieDetailsData);


  } catch (err) {
    next(err, req, res)
  }
}