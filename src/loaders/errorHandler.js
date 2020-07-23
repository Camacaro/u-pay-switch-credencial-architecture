'use strict';

import generateRequestID from '@utils/generateRequestID';
import Logger from '@utils/logger';
import config from '@config';

const Log = new Logger(config.appName);

export default ({ app }) => {
  const request = {
    id: generateRequestID(),
    provider: config.provider.name
  };

  // catch 404 and forward to error handler
  app.use((req, res) => {
    const result = {
      status: 'ERROR',
      request,
      errors: [{
        type: 'NOT_FOUND',
        code: 'NOT_FOUND_ROUTE',
        message: 'The route does not exists'
      }]
    };

    return res
      .status(404)
      .json(result)
      .end();
  });

  // error handlers
  app.use((err, req, res, next) => {
    /* *
     * Handle 401 thrown
     */
    /* istanbul ignore next */
    if (err.name === 'UnauthorizedError') {
      return res
        .status(err.status)
        .send({ message: err.message })
        .end();
    }

    return next(err);
  });

  /* istanbul ignore next */
  app.use((err, req, res) => {
    Log.error(err);
    res.status(err.status || 500);
    res.json(err.data);
  });
};
