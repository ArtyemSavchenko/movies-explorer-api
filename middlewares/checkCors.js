const { allowedCors } = require('../utils/config');

let {
  CORS,
} = process.env;
if (!CORS) {
  CORS = allowedCors;
} else {
  CORS = CORS.split('|');
}

module.exports = (req, res, next) => {
  const { origin } = req.headers;
  if (CORS.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  const requestHeaders = req.headers['access-control-request-headers'];
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }

  return next();
};
