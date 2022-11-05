module.exports.urlPattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/;
module.exports.errorsText = {
  default: 'Что-то пошло не так.',
  userNotFound: 'Пользователь не найден.',
  badUserData: 'Некорректные данные пользователя.',
  userAlreadyExists: 'Пользователь с таким адресом электронной почты уже существует.',
  badMovieData: 'Некорректные данные для добавления фильма.',
  movieNotFound: 'Фильм не найден.',
  movieCannotBeDeleted: 'Невозможно удалить фильм другого пользователя.',
  notAutorized: 'Необходима авторизация.',
  badUrl: 'Неправильный формат ссылки.',
  badEmail: 'Неправильный формат почты.',
  badEmailOrPassword: 'Неправильные почта или пароль',
  pageNotFound: 'Страница не существует.',
};
