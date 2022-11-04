const rateLimit = require('express-rate-limit');
const { rateLimitConfig } = require('../utils/config');

const { windowMs, max } = rateLimitConfig;
module.exports = rateLimit({
  windowMs,
  max,
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Слишком много запросов с одного IP.',
});
