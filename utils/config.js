module.exports.secretKey = 'dev-secret-key';
module.exports.dbURL = 'mongodb://localhost:27017/moviesdb';
module.exports.allowedCors = [
  'http://localhost:3001',
  'http://localhost:3000',
  'https://movie.nomoredomains.icu',
  'http://movie.nomoredomains.icu',
];
module.exports.rateLimitConfig = {
  windowMs: 600000,
  max: 100,
};
