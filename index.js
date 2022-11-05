require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const handleErrors = require('./middlewares/handleErrors');
const routes = require('./routes');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const checkCors = require('./middlewares/checkCors');
const { dbURL } = require('./utils/config');
const limiter = require('./middlewares/rateLimiter');

const {
  PORT = 3000,
  DB_URL = dbURL,
} = process.env;

const app = express();

app.use(requestLogger);

app.use(limiter);
app.use(helmet());
app.use(checkCors);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(DB_URL);

app.use(routes);

app.use(errorLogger);

app.use(errors());

app.use(handleErrors);

app.listen(PORT);
