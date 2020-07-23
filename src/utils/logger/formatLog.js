'use strict';

import winston from 'winston';

const formatLog = (route, logData) => winston.format.printf((info) => {
  const LOG_DATETIME = new Date(Date.now()).toUTCString();
  const LOG_LEVEL = info.level.toUpperCase();

  let message = `${LOG_DATETIME} | ${LOG_LEVEL} | ${route}.log | ${info.message}`;

  if (info.obj) {
    message += `data:${JSON.stringify(info.obj)} | `;
  }
  if (logData) {
    message += `logData:${JSON.stringify(logData)} | `;
  }

  return message;
});

export default formatLog;
