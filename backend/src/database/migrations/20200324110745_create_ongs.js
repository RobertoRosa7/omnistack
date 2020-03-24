
exports.up = function(knex) {
  // create table
  return knex.schema.createTable('ongs', function (table){
    table.string('id').primary();
    table.string('nome').notNullable();
    table.string('email').notNullable();
    table.string('cidade').notNullable();
    table.string('uf', 2).notNullable();
    table.string('whatsapp').notNullable();
  });
};

exports.down = function(knex) {
  // delete table
  return knex.schema.dropTable('ongs');
};
