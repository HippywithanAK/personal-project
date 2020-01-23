
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('email')
    table.string('user_name')
    table.string('first_name')
    table.string('surname')
    table.string('password')
    table.string('pref_role')
  })
};

exports.down = function (knex) {
  return knex.shcema.dropTable('users')
};
 