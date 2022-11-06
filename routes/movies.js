const router = require('express').Router();
const {
  getMovies,
  postMovies,
  deleteMovies,
} = require('../controllers/movies');
const { validateMovieId, validatePostingMovie } = require('../middlewares/validation');

router.get('/', getMovies);
router.post('/', validatePostingMovie, postMovies);
router.delete('/:movieId', validateMovieId, deleteMovies);

module.exports = router;
