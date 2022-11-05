const Forbidden = require('../errors/Forbidden');
const NotFound = require('../errors/NotFound');
const BadRequest = require('../errors/BadRequest');
const Movie = require('../models/movie');

module.exports.getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => res.send(movies.reverse()))
    .catch(next);
};

module.exports.postMovies = (req, res, next) => {
  Movie.create({ ...req.body, owner: req.user._id })
    .then((movie) => res.send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new BadRequest('Некорректные данные для добавления фильма.'));
      }
      return next(err);
    });
};

module.exports.deleteMovies = (req, res, next) => {
  const userId = req.user._id;
  const { movieId } = req.params;
  Movie.findById(movieId)
    .orFail(() => {
      throw new NotFound(`Фильм с id '${movieId}' не найдена.`);
    })
    .then((movie) => {
      if (movie.owner.toString() !== userId) {
        return next(new Forbidden('Невозможно удалить фильм другого пользователя.'));
      }
      return movie.remove()
        .then(() => res.send({ message: 'Фильм удален.' }));
    })
    .catch(next);
};
