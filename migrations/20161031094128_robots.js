exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('robots', (table) => {
    table.increments('id').primary()
    table.string('name')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('robots')
}
