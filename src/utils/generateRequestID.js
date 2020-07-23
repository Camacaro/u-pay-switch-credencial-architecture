'use strict';

import { v4 as uuidv4 } from 'uuid';

const generateRequestID = () => uuidv4();

export default generateRequestID;
