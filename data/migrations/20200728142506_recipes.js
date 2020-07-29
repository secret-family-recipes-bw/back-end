
exports.up = function (knex) {
    return knex.schema
        .createTable('Users', tbl => {
            tbl.increments()
            tbl.string('username', 128).notNullable().unique()
            tbl.string('password', 128).notNullable()
            tbl.string('email', 128).notNullable()
            tbl.string('name', 128).defaultTo('Jane Doe')
        })
        .createTable('Recipes', tbl => {
            tbl.increments()
            tbl.integer('user_id').unsigned().references('Users.id')
            .notNullable().onDelete("CASCADE").onUpdate("CASCADE")
            tbl.string('title', 256).unique().notNullable()
            tbl.string('source', 256).notNullable()
            tbl.string('category', 256).notNullable()
            tbl.string('image', 256)
        })

        .createTable('Ingredients', tbl => {
            tbl.increments()
            tbl.string('name', 256).unique().notNullable()
        })

        .createTable('Instructions', tbl => {
            tbl.increments()
            tbl.integer('recipe_id', 128).unsigned().notNullable().references('Recipes.id').onDelete("CASCADE").onUpdate("CASCADE")
            tbl.integer('step_number').notNullable().unsigned()
            tbl.text('step', 700).notNullable()
        })

        .createTable('RecipeServices', tbl => {
            tbl.integer('ingredients_id').notNullable().references('Ingredients.id').onDelete("CASCADE").onUpdate("CASCADE")
            tbl.integer('recipe_id').notNullable().references('Recipes.id').onDelete("CASCADE").onUpdate("CASCADE")
            tbl.float('quantity', 128).notNullable().unsigned()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('RecipeServices')
        .dropTableIfExists('Instructions')
        .dropTableIfExists('Ingredients')
        .dropTableIfExists('Recipes')
        .dropTableIfExists('Users')
};
