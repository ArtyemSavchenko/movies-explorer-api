const { errorsText } = require('../utils/constants');

module.exports = (err, req, res, next) => {
  const { statusCode = 500, message = errorsText.default } = err;
  res
    .status(statusCode)
    .send({ message: statusCode === 500 ? errorsText.default : message });

  next();
};
