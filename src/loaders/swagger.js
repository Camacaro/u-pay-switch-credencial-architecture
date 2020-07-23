'use strict';

import swaggerUI from 'swagger-ui-express';
import config from '@config';
import swaggerDocument from '../../build/swagger.json';

export default ({ app }) => {
  app.use(`${config.api.prefix}/docs`, swaggerUI.serve, swaggerUI.setup(swaggerDocument));
};
