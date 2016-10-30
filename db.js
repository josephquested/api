var env = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[env]
var knex = require('knex')(config)

module.exports = {
  getAll: getAll,
  getOneById: getOneById
}

function getAll (table, callback) {
  knex.select('*').from(table).asCallback(callback)
}

function getOneById (table, id, callback) {
  knex.select('*').from(table).where({id: id}).asCallback(callback)
}
