'use strict';

import Logger from '@utils/logger';
import generateRequestID from '@utils/generateRequestID';
import config from '@config';

const Log = new Logger(config.appName);

export default ({ app }) => {
  // Logger requests
  app.use((req, res, next) => {
    req.id = generateRequestID();
    req.provider = config.provider.name;

    Log.info(req);

    return next();
  });

  // Logger responses
  // app.use((req, res, next) => {
  //   req.id = generateRequestID();

  //   console.log(res.body)

  //   Log.error(res.body);
  //   Log.success(res.body);

  //   return next();
  // });
};
