'use strict';

require('@babel/register');

/* eslint-disable */
import app from './app';
import Logger from './utils/logger';
import config from './config';
/* eslint-enable */

const Log = new Logger(config.appName);

const server = app.listen(config.port, (err) => {
  if (err) {
    Log.error(err);
    process.exit(1);
    return;
  }

  Log.info(`✅ Server listening on: http://${config.host}:${config.port}`);
});

export default server;

/**
 * Webpack HMR Activation
 */
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.close());
}
