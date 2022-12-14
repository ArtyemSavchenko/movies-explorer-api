const router = require('express').Router();
const usersRouter = require('./users');
const moviessRouter = require('./movies');
const auth = require('../middlewares/auth');
const NotFound = require('../errors/NotFound');
const { login, createUser } = require('../controllers/users');
const { validateLogin, validateRegistration } = require('../middlewares/validation');
const { errorsText } = require('../utils/constants');

router.post('/signin', validateLogin, login);
router.post('/signup', validateRegistration, createUser);
router.use(auth);
router.use('/users', usersRouter);
router.use('/movies', moviessRouter);
router.use('*', (req, res, next) => {
  next(new NotFound(errorsText.pageNotFound));
});

module.exports = router;
