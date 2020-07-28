
exports.up = function(knex) {
  return knex.schema 
  .createTable('users',tbl => {
      tbl.increments()
      tbl.string('username', 128).notNullable().unique()
      tbl.string('password', 128).notNullable()
      tbl.string('email', 128).notNullable()
      tbl.string('name', 128).defaultTo('Jane Doe')
  })
  .createTable('recipes',tbl => {
    tbl.increments()
    tbl.integer('user_id', 128).notNullable().unsigned().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
    tbl.string('title', 128).notNullable().unique()
    tbl.string('ingredients', 128).notNullable()
    tbl.text('instructions', 1000).notNullable()
    tbl.string('source', 128).notNullable()
    tbl.string('image', 128)
    
})

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipes').dropTableIfExists('users')
};
