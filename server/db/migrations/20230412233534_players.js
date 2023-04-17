/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('players', (table) => {
    table.string('user').primary()
    table.string('char_name')
    table.string('pronouns')
    table.text('description')
    table.text('inventory').defaultTo(JSON.stringify(['Ruby', 'Pocketknife']))
    table.text('location').defaultTo('town-square')
    table.text('progress').defaultTo(JSON.stringify({ quests: {}, events: {} }))
    table.integer('gold').defaultTo(20)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('players')
}
