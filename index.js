require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const handleErrors = require('./middlewares/handleErrors');
const routes = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const checkCors = require('./middlewares/checkCors');
const { dbURL } = require('./utils/config');

const {
  PORT = 3000,
  NODE_ENV = 'develop',
  DB_URL = dbURL,
} = process.env;

const app = express();

app.use(helmet());
app.use(checkCors);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(DB_URL);

app.use(requestLogger);

app.use(routes);

app.use(errorLogger);

app.use(errors());

app.use(handleErrors);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Приложение запущено на порте ${PORT}.\nРежим работы приложения '${NODE_ENV}'.`);
});
