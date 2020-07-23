'use strict';

import winston from 'winston';
import appRoot from 'app-root-path';
import dateFormat from '@utils/logger/dateFormat';
import formatLog from '@utils/logger/formatLog';
import config from '@config';

const LOG_PATH = `${appRoot}/logs/${dateFormat('year')}/${dateFormat('month')}/${dateFormat('day')}/`;

class LoggerService {
  constructor(route) {
    this.logData = null;
    this.route = route;

    const logger = winston.createLogger({
      format: formatLog(this.route, this.logData),
      transports: [
        new winston.transports.Console({
          silent: config.environment === 'test'
        }),
        new winston.transports.File({
          filename: `${LOG_PATH}${route}.log`
        })
      ]
    });

    this.logger = logger;
  }

  setLogData(logData) {
    this.logData = logData;
  }

  async alert(message, object) {
    this.logger.log('alert', message, {
      object
    });
  }

  async critical(message, object) {
    this.logger.log('crit', message, {
      object
    });
  }

  async debug(message, object) {
    this.logger.log('debug', message, {
      object
    });
  }

  async emergency(message, object) {
    this.logger.log('emerg', message, {
      object
    });
  }

  async error(message, object) {
    this.logger.log('error', message, {
      object
    });
  }

  async info(message, object) {
    this.logger.log('info', message, {
      object
    });
  }

  async notice(message, object) {
    this.logger.log('notice', message, {
      object
    });
  }

  async warning(message, object) {
    this.logger.log('warning', message, {
      object
    });
  }
}

export default LoggerService;
