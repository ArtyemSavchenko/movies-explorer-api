const jwt = require('jsonwebtoken');
const Unauthorized = require('../errors/Unauthorized');
const { secretKey } = require('../utils/config');
const { errorsText } = require('../utils/constants');

const extractBearerToken = (header) => header.replace('Bearer ', '');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new Unauthorized(errorsText.notAutorized);
  }

  const token = extractBearerToken(authorization);
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : secretKey);
  } catch (err) {
    throw new Unauthorized(errorsText.notAutorized);
  }

  req.user = payload;

  next();
};
