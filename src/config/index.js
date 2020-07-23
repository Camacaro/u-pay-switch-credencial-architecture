'use strict';

import dotenv from 'dotenv';

const environment = process.env.NODE_ENV;
const envFile = `.env.${environment}`;

const envFound = dotenv.config({ path: envFile });
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const config = envFound.parsed;

const API_VERSION_NAME = 'v1';

export default {
  environment,
  appName: config.APP_NAME || 'server',

  host: 'localhost',
  port: parseInt(config.APP_PORT, 10),

  sessionSecret: config.SESSION_SECRET,

  databases: [
    {
      name: 'postgres',
      host: config.DB_HOST,
      port: config.DB_PORT,
      db: config.DB_NAME,
      user: config.DB_USER,
      password: config.DB_PASS,
      maxPool: config.MAX_POOL,
      minPool: config.MIN_POOL
    }
  ],

  logs: {
    level: config.LOG_LEVEL || 'silly'
  },

  // API configs
  api: {
    prefix: `/${API_VERSION_NAME}`
  },

  // Provider variables
  provider: {
    name: config.PROVIDER_NAME,
    url: config.PROVIDER_URL,
    source: config.PROVIDER_SOURCE,
    username: config.PROVIDER_USERNAME
  },

  // External services
  sentry: {
    dns: config.SENTRY_DNS || 'https://<key>@<organization>.ingest.sentry.io/<project>'
  }
};
