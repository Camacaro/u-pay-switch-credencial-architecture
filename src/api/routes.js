'use strict';

import { Router } from 'express';
import test from './example-api/routes';

export default () => {
  const app = Router();

  test(app);

  return app;
};
