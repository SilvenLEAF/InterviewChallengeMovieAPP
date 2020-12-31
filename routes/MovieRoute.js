const router = require('express').Router();
const movieController = require('../controllers/movieController');




router.get('/list', movieController.get_popular_movies);
router.get('/search/:term', movieController.search_movies_and_tv_shows);
router.get('/details/:id', movieController.show_details);





module.exports = router;