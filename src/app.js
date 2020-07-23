'use strict';

import express from 'express';
import appLoaders from './loaders';

const app = express();

appLoaders({ expressApp: app });

export default app;
