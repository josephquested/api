var env = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[env]
var knex = require('knex')(config)

module.exports = {
  getAll: getAll,
  getOneById: getOneById,
  createRobot: createRobot,
  updateRobot: updateRobot,
  deleteRobot: deleteRobot,
}

function getAll (table, callback) {
  knex.select('*')
  .from(table)
  .asCallback(callback)
}

function getOneById (table, id, callback) {
  knex.select('*')
  .from(table)
  .where({id: id})
  .asCallback(callback)
}

function createRobot (data, callback) {
  knex('robots')
  .insert({name: data.name})
  .asCallback(callback)
}

function updateRobot (data, callback) {
  knex('robots')
  .where('id', '=', data.id)
  .update({name: data.name})
  .asCallback(callback)
}

function deleteRobot (data, callback) {
  knex('robots')
  .where('id', '=', data.id)
  .del()
  .asCallback(callback)
}
