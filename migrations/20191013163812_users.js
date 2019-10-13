
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  
};
