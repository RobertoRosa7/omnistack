const knex = require('knex');
const settings = require('../../knexfile');
const setEnv = process.env.NODE_ENV === 'test' ? settings.test : settings.development;

const connection = knex(setEnv);

module.exports = connection;