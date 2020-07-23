'use strict';

import { Router } from 'express';
import ExampleController from './example-controller';

const route = Router();

export default (app) => {
  app.use('/test', route);

  route.get('/', ExampleController.controller);
};
