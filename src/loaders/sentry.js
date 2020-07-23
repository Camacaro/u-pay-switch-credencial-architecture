'use strict';

import * as Sentry from '@sentry/node';
import config from '@config';

// Sentry config (https://sentry.io/for/express/)
/* istanbul ignore next */
if (config.environment === 'production') {
  Sentry.init({
    dsn: config.sentry.dns
  });
}

export default ({ app }) => {
  app.use(Sentry.Handlers.requestHandler());
  app.use(Sentry.Handlers.errorHandler());
};
