'use strict';

import sentryLoader from './sentry';
import expressLoader from './express';
import loggerLoader from './logger';
import swaggerLoader from './swagger';
import errorHandlerLoader from './errorHandler';
import databaseLoader from './database';
import Logger from '../utils/logger';
import config from '../config';

const Log = new Logger(config.appName);

const loaders = async ({ expressApp }) => {
  await sentryLoader({ app: expressApp });
  await loggerLoader({ app: expressApp });
  await expressLoader({ app: expressApp });
  await swaggerLoader({ app: expressApp });
  await errorHandlerLoader({ app: expressApp });

  await databaseLoader();

  Log.info('⚙️  Loadeders initialized');
};

export default loaders;
