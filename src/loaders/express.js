'use strict';

import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import Logger from '@utils/logger';
import routes from '@api/routes';
import config from '@config';

const Log = new Logger(config.appName);

export default ({ app }) => {
  app.use(express.json());

  // Log requests and responses
  app.use(morgan('tiny', {
    stream: {
      write: (message) => Log.info(message.trim())
    }
  }));

  // Helmet helps you secure your Express apps by setting various HTTP headers
  app.use(helmet());

  // Enable CORS (Cross Origin Resource Sharing)
  app.use(cors());

  // Transforms the raw string of req.body into json
  app.use(bodyParser.json());

  // Cross-Site Request Forgery (CSRF) mitigation
  // CSRF

  app.use(session({
    secret: config.sessionSecret,
    name: 'sessionID',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));

  // API Routes loader
  app.use(config.api.prefix, routes());
};
