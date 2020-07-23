'use strict';

import Sequelize from 'sequelize';
import config from '@config';

const DB_CONFIG = config.databases.find((db) => db.name === 'postgres');

const db = new Sequelize(DB_CONFIG.db, DB_CONFIG.user, DB_CONFIG.password, {
  host: DB_CONFIG.host,
  dialect: 'postgres',
  dialectOptions: {
    encrypt: true
  },
  port: Number(DB_CONFIG.port) || 5432,
  logging: false,
  pool: {
    max: Number(DB_CONFIG.maxPool) || 10,
    min: Number(DB_CONFIG.minPool) || 1,
    acquire: 30000,
    idle: 10000
  }
});

export default db;
