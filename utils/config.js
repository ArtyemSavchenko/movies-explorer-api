module.exports.secretKey = 'dev-secret-key';
module.exports.dbURL = 'mongodb://localhost:27017/moviesdb';
module.exports.allowedCors = [
  '*',
];
module.exports.rateLimitConfig = {
  windowMs: 600000,
  max: 100,
};
