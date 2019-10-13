
exports.up = function(knex) {
    table.string('title').notNullable();
    table.text('description');
    table.timestamp('created_at').defaultTo(knex.fn.now());
};

exports.down = function(knex) {
  
};
