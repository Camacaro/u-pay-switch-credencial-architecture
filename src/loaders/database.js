'use strict';

import sequelize from '../database';
import Logger from '../utils/logger';
import config from '../config';

const Log = new Logger(config.appName);

export default () => {
  const loaderSuccess = () => {
    Log.info('🔌 Database connection established');
  };

  /* istanbul ignore next */
  const loaderFail = (error) => {
    Log.error('💥 Unable to connect to the database:', error);
  };

  sequelize.authenticate()
    .then(loaderSuccess)
    .catch(loaderFail);

  /* istanbul ignore next */
  sequelize.sync({
    // Using 'force' will drop any table defined in the models and create them again.
    // force: true
  });
};
